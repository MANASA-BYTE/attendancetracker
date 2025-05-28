# yolov8_processor.py
import os
import cv2
from ultralytics import YOLO

model = YOLO("yolov8n.pt")  # Load YOLOv8 model (COCO dataset)

def save_face_image(image_array, student_id):
    folder_path = os.path.join("static", "faces")
    os.makedirs(folder_path, exist_ok=True)

    file_path = os.path.join(folder_path, f"{student_id}.jpg")
    cv2.imwrite(file_path, image_array)

    return f"/static/faces/{student_id}.jpg"

def process_video(video_path):
    results = []
    cap = cv2.VideoCapture(video_path)
    student_count = 1  # Just for unique student IDs in this mock

    while cap.isOpened():
        success, frame = cap.read()
        if not success:
            break

        detections = model(frame)[0]

        for i, det in enumerate(detections.boxes):
            confidence = float(det.conf.item())
            class_id = int(det.cls[0].item())

            # Only detect 'person' class (class_id 0 in COCO)
            if class_id != 0 or confidence < 0.3:
                continue

            x1, y1, x2, y2 = map(int, det.xyxy[0].tolist())
            face_crop = frame[y1:y2, x1:x2]

            student_id = f"S{100 + student_count}"
            name = f"Student {student_count}"
            status = "active" if confidence >= 0.5 else "inactive"

            image_url = save_face_image(face_crop, student_id)

            results.append({
                "student_id": student_id,
                "name": name,
                "confidence": round(confidence, 2),
                "status": status,
                "image_url": image_url
            })

            student_count += 1

        break  # For demo purposes — remove to process full video

    cap.release()
    return results

# yolov8_processor.py
'''
import os
import cv2
import uuid
from PIL import Image
from ultralytics import YOLO
import random

# Load YOLOv8 model
model = YOLO("yolov8n.pt")  # Use custom model if needed

# Directory to save cropped face images
OUTPUT_DIR = "static/faces"
os.makedirs(OUTPUT_DIR, exist_ok=True)

def classify_expression(face_img):
    # Placeholder expression classifier using random logic
    confidence = round(random.uniform(0.4, 1.0), 2)
    status = "active" if confidence >= 0.5 else "inactive"
    return confidence, status

def process_video(video_path):
    cap = cv2.VideoCapture(video_path)
    results = []
    frame_count = 0

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        frame_count += 1
        if frame_count % 5 != 0:
            continue  # Skip frames to reduce processing load

        detections = model(frame)[0]

        for box in detections.boxes:
            x1, y1, x2, y2 = map(int, box.xyxy[0])
            face_crop = frame[y1:y2, x1:x2]

            if face_crop.size == 0:
                continue

            # Classify the expression
            confidence, status = classify_expression(face_crop)

            # Generate dynamic filename
            filename = f"face_{uuid.uuid4().hex[:8]}.jpg"
            save_path = os.path.join(OUTPUT_DIR, filename)

            # Save the cropped face
            cv2.imwrite(save_path, face_crop)

            # Append result
            results.append({
                'filename': filename,
                'confidence': confidence,
                'status': status
            })

    cap.release()
    return results
'''