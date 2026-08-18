import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResumeScanner from "./ResumeScanner";
import DeanDashboard from "./DeanDashboard";
import CoordinatorDashboard from "./CoordinatorDashboard";
import Login from "./Login";
import Signup from "./Signup";
import DashboardLayout from "./DashboardLayout";
import StudentDashboard from "./StudentDashboard";
import Home from "./Home"; 
import ProfileSettings from "./ProfileSettings";
import PortalSelection from "./PortalSelection";
import Home from "./Home";
import ProfileSettings from "./ProfileSettings";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  
  // GLOBAL THEME CONTROLLER: Enforces the theme on EVERY page
  useEffect(() => {
    // Read the saved theme, but force "dark" as the absolute default
    const savedTheme = localStorage.getItem("hiresphere_theme") || "dark";
    
    // If a new user visits, immediately save "dark" to their browser
    if (!localStorage.getItem("hiresphere_theme")) {
      localStorage.setItem("hiresphere_theme", "dark");
    }

    // Apply the theme directly to the HTML document
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portals" element={<PortalSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/dashboard" element={<DashboardLayout />}>
           <Route index element={<StudentDashboard />} />
           <Route path="scanner" element={<ResumeScanner />} />
           <Route path="coordinator" element={<CoordinatorDashboard />} />
           <Route path="admin" element={<DeanDashboard />} />
           <Route path="profile" element={<ProfileSettings />} /> 

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<StudentDashboard />} />
            <Route path="scanner" element={<ResumeScanner />} />
            <Route path="coordinator" element={<CoordinatorDashboard />} />
            <Route path="dean" element={<DeanDashboard />} />
            <Route path="profile" element={<ProfileSettings />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}