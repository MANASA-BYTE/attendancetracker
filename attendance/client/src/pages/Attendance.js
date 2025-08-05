import { useEffect, useState } from "react";
import axios from "axios";

const Attendance = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/attendance").then(res => setAttendance(res.data));
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-3">Attendance Records</h1>
      <table className="w-full border">
        <thead>
          <tr className="border-b">
            <th className="p-2">Student ID</th>
            <th className="p-2">Timestamp</th>
            <th className="p-2">Confidence</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{record.student_id}</td>
              <td className="p-2">{new Date(record.timestamp).toLocaleString()}</td>
              <td className="p-2">{record.confidence_score.toFixed(2)}</td>
              <td className="p-2">{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
