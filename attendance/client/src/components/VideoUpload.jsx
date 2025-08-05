// VideoShowcase.jsx
/*import React from 'react';
import './VideoShowcase.css';
import { Info } from 'react-feather'; // Using react-feather icons
import imageSrc from './attendance.jpg'; // Replace with the correct image path

const VideoShowcase = () => {
  return (
    <div className="video-showcase">
      <div className="image-container">
        <img src={imageSrc} alt="AI-Powered Defect Detection" className="demo-image" />
        
        <div className="ai-badge">
          <Info size={24} color="white" />
        </div>
      </div>
    </div>
  );
};

export default VideoShowcase;*/

import { useState } from 'react';
import { uploadVideo } from '../api/uploadApi';

export default function VideoUpload({ onUploadSuccess }) {
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!video) return;
    setLoading(true);
    const result = await uploadVideo(video);
    setLoading(false);
    onUploadSuccess(result);
  };

  return (
    <div className="p-4 bg-white rounded-2xl shadow">
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setVideo(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700"
      >
        {loading ? 'Processing...' : 'Upload Video'}
      </button>
    </div>
  );
}
