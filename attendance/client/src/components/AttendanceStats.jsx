import React from 'react';
import { Users, UserCheck, UserX } from 'lucide-react';

const AttendanceStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      <StatCard 
        title="Total Students" 
        value={stats.total} 
        icon={<Users className="h-6 w-6 text-indigo-500" />}
        bgColor="bg-indigo-50"
        textColor="text-indigo-700"
      />
      <StatCard 
        title="Present" 
        value={stats.present} 
        percentage={stats.presentPercentage}
        icon={<UserCheck className="h-6 w-6 text-emerald-500" />}
        bgColor="bg-emerald-50"
        textColor="text-emerald-700"
      />
      <StatCard 
        title="Absent" 
        value={stats.absent} 
        percentage={stats.absentPercentage}
        icon={<UserX className="h-6 w-6 text-orange-500" />}
        bgColor="bg-orange-50"
        textColor="text-orange-700"
      />
    </div>
  );
};

const StatCard = ({ 
  title, 
  value, 
  percentage, 
  icon,
  bgColor,
  textColor 
}) => {
  return (
    <div className={`${bgColor} p-4 rounded-lg shadow-sm flex items-center space-x-4 transition-transform duration-300 hover:scale-105`}>
      <div className="p-3 rounded-full bg-white shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <div className="flex items-baseline">
          <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
          {percentage !== undefined && (
            <span className="ml-2 text-sm text-gray-500">{percentage}%</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttendanceStats;
