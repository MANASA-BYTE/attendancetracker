from ultralytics import YOLO
import cv2
import random
from datetime import datetime

def process_video(video_path):
    model = YOLO("yolov8n.pt")
    cap = cv2.VideoCapture(video_path)

    frame_id = 0
    results = []

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        detections = model(frame)
        confidence = random.uniform(0.3, 0.9)  # Replace with real score logic
        status = "active" if confidence >= 0.5 else "inactive"

        results.append({
            "frame_id": f"frame_{frame_id}",
            'face': "PIL_image_object",
            "confidence": round(confidence, 2),
            "status": status,
            "date": str(datetime.now().date())
        })

        frame_id += 1

    cap.release()
    return results
