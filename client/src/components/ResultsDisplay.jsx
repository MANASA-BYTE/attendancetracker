import React from 'react';
const ResultsDisplay = ({ results }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {results.map((res, index) => (
        <div key={index} className="border rounded-xl p-4 bg-white shadow-md">
          <p><strong>Date:</strong> {res.date}</p>
          <p><strong>Frame:</strong> {res.frame_id}</p>
          <p><strong>Confidence:</strong> {res.confidence}</p>
          <p className={res.status === "active" ? "text-green-600" : "text-red-600"}>
            <strong>Status:</strong> {res.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ResultsDisplay;
