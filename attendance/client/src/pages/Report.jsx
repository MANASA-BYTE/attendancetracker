import { useState, useEffect } from 'react';
import axios from 'axios';
import AttendanceChart from '../components/AttendanceChart'; // Import the chart component

const Report = () => {
    const [attendanceData, setAttendanceData] = useState([]);

    useEffect(() => {
        // Fetch attendance data from the API
        axios.get('/api/reports')
            .then(response => {
                setAttendanceData(response.data);
            })
            .catch(error => {
                console.error('Error fetching attendance data:', error);
            });
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold">Class Attendance Report</h1>
            <div className="my-4">
                {/* Render the Attendance Chart if data is available */}
                {attendanceData.length > 0 ? (
                    <AttendanceChart data={attendanceData} />
                ) : (
                    <p>No report data available.</p>
                )}
            </div>
        </div>
    );
};

export default Report;
