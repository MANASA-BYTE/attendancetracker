/*export const uploadVideo = async (videoFile) => {
    const formData = new FormData();
    formData.append("video", videoFile);
  
    const response = await fetch("http://localhost:5000/upload_video", {
      method: "POST",
      body: formData,
    });
  
    const data = await response.json();
    return data;
  };*/

  import axios from 'axios';

const API_BASE = 'http://localhost:5000'; // Flask server URL

export const uploadVideo = async (formData) => {
  return await axios.post(`${API_BASE}/upload_video`, formData);
};

export const fetchWeeklyReport = async () => {
  return await axios.get(`${API_BASE}/weekly_report`);
};
