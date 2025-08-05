from flask import Blueprint, jsonify
from pymongo import MongoClient
from datetime import datetime, timedelta

report = Blueprint('report', __name__)
client = MongoClient("mongodb://localhost:27017/")
db = client["attendance_db"]
collection = db["attendance"]

@report.route('/api/weekly-report', methods=['GET'])
def get_weekly_report():
    today = datetime.today()
    week_ago = today - timedelta(days=7)
    cursor = collection.find({"date": {"$gte": week_ago.strftime('%Y-%m-%d')}})

    result = {}
    for doc in cursor:
        sid = doc["student_id"]
        if sid not in result:
            result[sid] = {"present": 0, "absent": 0, "images": []}
        result[sid][doc["status"]] += 1
        result[sid]["images"].append({
            "url": doc["face_image_url"],
            "status": doc["status"],
            "confidence": doc["confidence"]
        })

    return jsonify(result)
