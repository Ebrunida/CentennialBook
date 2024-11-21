import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Banner from "./components/Banner";
import ForgotPassword from "./components/ForgotPassword";
import EventFeed from "./components/EventFeed";
import ClubManagement from "./components/ClubManagement";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  return (
    <Router>
      <Banner isAuthenticated={isAuthenticated} userRole={userRole} />
      <Routes>
        <Route
          path="/login"
          element={
            <Login 
              setIsAuthenticated={setIsAuthenticated}
              setUserRole={setUserRole}
            />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            isAuthenticated ? (
              <Home setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route 
          path="/clubs" 
          element={
            isAuthenticated ? (
              <ClubManagement />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route 
          path="/events" 
          element={
            isAuthenticated ? (
              <EventFeed />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;