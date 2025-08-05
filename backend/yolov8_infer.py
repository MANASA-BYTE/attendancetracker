from ultralytics import YOLO
import cv2
import numpy as np
import base64

# Load YOLOv8 face detection model
model = YOLO("yolov8n.pt")  # or your trained model path

def encode_face(cropped_face):
    _, buffer = cv2.imencode('.jpg', cropped_face)
    return base64.b64encode(buffer).decode('utf-8')

def process_video(video_path):
    cap = cv2.VideoCapture(video_path)
    frame_skip = 10  # Process every 10th frame
    frame_count = 0

    results = []

    while cap.isOpened():
        success, frame = cap.read()
        if not success:
            break

        frame_count += 1
        if frame_count % frame_skip != 0:
            continue

        detections = model(frame)[0]

        for det in detections.boxes:
            conf = float(det.conf.item())
            if conf < 0.3:  # Skip very low-confidence detections
                continue

            x1, y1, x2, y2 = map(int, det.xyxy[0])
            cropped_face = frame[y1:y2, x1:x2]
            face_encoded = encode_face(cropped_face)

            status = "Active" if conf >= 0.5 else "Inactive"
            results.append({
                "face": face_encoded,
                "confidence": conf,
                "status": status
            })

    cap.release()
    return results
