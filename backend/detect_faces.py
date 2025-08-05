'''import pandas as pd
from datetime import datetime

# This function mocks the video processing by reading from a CSV file
def process_video(video_path=None):
    # Assuming 'yolov8_output.csv' has columns: frame_id, confidence
    df = pd.read_csv("yolov8n.pt")

    results = []
    for index, row in df.iterrows():
        confidence = float(row["confidence"])
        status = "active" if confidence >= 0.5 else "inactive"

        results.append({
            "date": datetime.now().strftime("%Y-%m-%d"),
            "frame_id": row["frame_id"],
            "confidence": round(confidence, 2),
            "status": status
        })

    return results'''

import cv2
import numpy as np
from ultralytics import YOLO
from PIL import Image

# Load a pre-trained YOLOv8 face model
model = YOLO("yolov8n-face.pt")  # Make sure this file exists or use a custom-trained one

def detect_faces(frame):
    results = model(frame)
    detections = results[0].boxes.data.cpu().numpy()  # (x1, y1, x2, y2, confidence, class)
    
    face_data = []

    for det in detections:
        x1, y1, x2, y2, conf, cls = det

        x1, y1, x2, y2 = map(int, [x1, y1, x2, y2])
        face_crop = frame[y1:y2, x1:x2]

        if face_crop.size == 0:
            continue

        # Convert cropped face to PIL Image
        face_image = Image.fromarray(cv2.cvtColor(face_crop, cv2.COLOR_BGR2RGB))

        # Status based on confidence threshold
        status = "active" if conf >= 0.5 else "inactive"

        face_data.append({
            "face": face_image,
            "confidence": float(conf),
            "status": status
        })

    return face_data

