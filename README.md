AI-Powered Attendance Tracker

📌 Overview

AI-Powered Attendance Tracker is a web application that automatically marks student attendance using YOLOv8 face detection and activity analysis. The system analyzes classroom videos to detect student focus, activity level, and engagement.

Students are marked:

✅ Present → If confidence score ≥ 0.5
❌ Absent → If confidence score < 0.5
🚀 Features
Video Upload via Admin Dashboard
YOLOv8 Face Detection
Activity & Attention Detection
Confidence Score Based Attendance
Student Active / Inactive Detection
Weekly Attendance Reports
MongoDB Data Storage
Student & Admin Dashboard
🛠️ Tech Stack
Frontend
React.js
Tailwind CSS
Backend
Flask (Python)
REST API
Machine Learning
YOLOv8
OpenCV
Facial Expression Detection
Database
MongoDB
⚙️ How It Works
Admin uploads classroom video
Backend processes video using YOLOv8
Faces are detected and analyzed
Confidence score assigned
Attendance marked automatically
Results stored in MongoDB
Weekly report generated
