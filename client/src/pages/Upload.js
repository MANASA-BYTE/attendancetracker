import { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("video", file);

    const res = await axios.post("http://localhost:5000/upload", formData);
    alert(res.data.message);
  };

  return (
    <div className="p-5">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="bg-blue-500 p-2 text-white">Upload</button>
    </div>
  );
};

export default Upload;
