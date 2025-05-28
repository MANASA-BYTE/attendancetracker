/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"; 
import Home from "./pages/Home"; 

function App() {
    return (
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard/:id" element={<Dashboard />} />
            </Routes>
        
    );
}

export default App; 

*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminRegister from "./pages/AdminRegister";
import StudentRegister from "./pages/StudentRegister";
import RoleSelection from "./pages/Role"; 
import AdminLogin from "./pages/AdminLogin";
import StudentLogin from "./pages/StudentLogin";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";

//import UploadForm from './components/UploadForm';
//import ResultsDisplay from './components/ResultsDisplay';
//import WeeklyReport from './components/WeeklyReport';

import Report from "./components/Report" ;
import Home from "./pages/Home";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/role" element={<RoleSelection />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
         <Route path="/student/dashboard" element={<StudentDashboard />} />
         <Route path="/admin/report" element={<Report />}/>
         
      </Routes>
    
  );
}

export default App;
