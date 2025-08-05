'''from pymongo import MongoClient
from datetime import datetime

client = MongoClient("mongodb://localhost:27017/")
db = client["attendance_tracker"]
collection = db["attendance_results"]

def save_results_to_mongodb(results):
    if isinstance(results, list):
        for result in results:
            result["timestamp"] = datetime.now()
        collection.insert_many(results)
    else:
        raise ValueError("Expected a list of results")

def get_weekly_report():
    last_7_days = datetime.now().timestamp() - 7 * 24 * 60 * 60
    return list(collection.find({"timestamp": {"$gte": datetime.fromtimestamp(last_7_days)}}))
'''
'''
from pymongo import MongoClient
from datetime import datetime
import json

client = MongoClient("mongodb://localhost:27017/")
db = client["attendance_tracker"]
collection = db["attendance_records"]

def save_results_to_mongo(results, class_name, section, time):
    for result in results:
        print("Result:", result)
        # Make sure result is a dict, or parse it if it's a JSON string
        if isinstance(result, str):
            result = json.loads(result)  # import json at the top if needed

        data = {
            "student_id": result["student_id"],
            "status": result["status"],
            "confidence": result["confidence"],
            "timestamp": datetime.utcnow(),
            "class": class_name,
            "section": section,
            "time": time
        }
        collection.insert_one(data)
'''
# db.py

from pymongo import MongoClient
from datetime import datetime

# MongoDB setup
client = MongoClient("mongodb://localhost:27017/")
db = client["attendance_db"]         # Same DB as in app.py
collection = db["attendance"]        # Collection name

def save_results_to_mongo(results, class_name, section, time):
    for result in results:
        record = {
            "class": class_name,
            "section": section,
            "time": time,
            "status": result['status'],
            "confidence": result['confidence'],
            "face_image": result['image_url'],
            "timestamp": result.get("timestamp", datetime.now())
        }
        collection.insert_one(record) 
