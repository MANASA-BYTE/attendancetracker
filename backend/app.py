''''from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import uuid
from yolov8_infer import process_video
from dotenv import load_dotenv
load_dotenv()


app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload-video', methods=['POST'])
def upload_video():
    if 'video' not in request.files:
        return jsonify({'error': 'No video uploaded'}), 400

    video = request.files['video']
    video_id = str(uuid.uuid4())
    video_path = os.path.join(UPLOAD_FOLDER, f"{video_id}.mp4")
    video.save(video_path)

    try:
        results = process_video(video_path)
        return jsonify(results)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)


from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from  yolov8_processor import process_video
from db import save_results_to_mongo

app = Flask(__name__)
#CORS(app)
#CORS(app, supports_credentials=True, resources={r"/upload_video": {"origins": "http://localhost:5173"}})

CORS(app, supports_credentials=True, origins=["http://localhost:5173"])

CORS(app, resources={r"/*": {"origins": "*"}})

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload_video', methods=['POST'])
def upload_video():
    if 'video' not in request.files:
        return jsonify({'error': 'No video part'}), 400

    video = request.files['video']
    class_name = request.form.get('class')
    section = request.form.get('section')
    time = request.form.get('time')

    video_path = os.path.join(UPLOAD_FOLDER, video.filename)
    video.save(video_path)

    results = process_video(video_path)
    save_results_to_mongo(results, class_name, section, time)

    return jsonify({'message': 'Video processed successfully', 'results': results})

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5000, debug=True)'''

'''from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from yolov8_processor import process_video
from db import save_results_to_mongo

app = Flask(__name__)
CORS(app, supports_credentials=True, origins=["http://localhost:5173"])
CORS(app, resources={r"/*": {"origins": "*"}})

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload_video', methods=['POST'])
def upload_video():
    if 'video' not in request.files:
        return jsonify({'error': 'No video part'}), 400

    video = request.files['video']
    class_name = request.form.get('class')
    section = request.form.get('section')
    time = request.form.get('time')

    video_path = os.path.join(UPLOAD_FOLDER, video.filename)
    video.save(video_path)

    # Process video once, and get both video path & face results
    output_video_path, face_results = process_video(video_path)

    # Save results to MongoDB
    save_results_to_mongo(face_results, class_name, section, time)

    print("FILES:", request.files)
    print("FORM:", request.form)

    # Return processed video and face result JSON
    return jsonify({
        'message': 'Video processed successfully',
        'video_url': f"/{output_video_path}",
        'faces': face_results
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)'''

import os
import uuid
import io
from datetime import datetime, timedelta
from flask import Flask, request, jsonify, send_file, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
from yolov8_processor import process_video
from db import save_results_to_mongo
from pymongo import MongoClient
import matplotlib.pyplot as plt
from werkzeug.utils import secure_filename


# Initialize Flask app
app = Flask(__name__)

# Enable CORS for the frontend
CORS(app, supports_credentials=True, origins=["http://localhost:5173"])
OUTPUT_DIR = os.path.join(app.root_path, 'static', 'faces')



@app.route('/static/faces/<filename>')
def get_face_image(filename):
    return send_from_directory('static/faces', filename)

# Folder configurations
UPLOAD_FOLDER = 'uploads'
OUTPUT_FOLDER = 'static/faces'
ALLOWED_EXTENSIONS = {'mp4', 'mov', 'avi'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['OUTPUT_FOLDER'] = OUTPUT_FOLDER
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(OUTPUT_FOLDER, exist_ok=True)

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")
db = client["attendance_db"]
collection = db["attendance_trackerr"]

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
@app.route('/upload_video', methods=['POST'])
def upload_video():
    if 'video' not in request.files:
        return jsonify({'error': 'No video file uploaded'}), 400

    video = request.files['video']

    if video.filename == '' or not allowed_file(video.filename):
        return jsonify({'error': 'Invalid video file'}), 400

    class_name = request.form.get('class_name')
    section = request.form.get('section')
    time = request.form.get('time')

    filename = secure_filename(video.filename)
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    video.save(filepath)

    # Process the video using your mock YOLOv8 function
    faces_data = process_video(filepath)

    processed_results = []
    for face_data in faces_data:
        result = {
            'image_url': face_data['image_url'],
            'confidence': round(face_data['confidence'], 2),
            'status': face_data['status'],
            'timestamp': datetime.now(),
            'student_id': face_data['student_id'],
            'name': face_data['name'],
            'class': class_name,
            'section': section
        }
        processed_results.append(result)

    # Save to MongoDB
    save_results_to_mongo(processed_results, class_name, section, time)

    return jsonify({'faces': processed_results}), 200

@app.route('/generate_weekly_report', methods=['GET'])
def generate_weekly_report():
    one_week_ago = datetime.now() - timedelta(days=7)
    records = list(collection.find({"timestamp": {"$gte": one_week_ago}}))

    if not records:
        return jsonify({"error": "No attendance data found for the past week."}), 404

    data = {}
    for record in records:
        date = record['timestamp'].strftime('%Y-%m-%d')
        status = record['status']
        if date not in data:
            data[date] = {'present': 0, 'absent': 0}
        if status == 'active':
            data[date]['present'] += 1
        else:
            data[date]['absent'] += 1

    dates = sorted(data.keys())
    present_counts = [data[day]['present'] for day in dates]
    absent_counts = [data[day]['absent'] for day in dates]

    # Create bar chart for attendance
    plt.figure(figsize=(10, 6))
    plt.bar(dates, present_counts, color='green', label='Present')
    plt.bar(dates, absent_counts, bottom=present_counts, color='red', label='Absent')
    plt.xticks(rotation=45)
    plt.xlabel('Date')
    plt.ylabel('Number of Students')
    plt.title('Weekly Attendance Report')
    plt.legend()

    # Save the report as an image
    buf = io.BytesIO()
    plt.tight_layout()
    plt.savefig(buf, format='png')
    buf.seek(0)
    return send_file(buf, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True)