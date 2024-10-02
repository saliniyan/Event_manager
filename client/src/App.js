import React from "react";
import { useState,useEffect } from "react";
import Admin from "./Admin";
import Student from "./Student";
import Home from "./Home"
import { BrowserRouter as Router ,Route, Routes ,Link } from "react-router-dom";
import FormPage from "./FormPage";
import './App.css';
import Login from "./Login";

const App = () => {
    const [event, setevent] = useState(() => {
        const savedEvents = localStorage.getItem('Events');
        return savedEvents ? JSON.parse(savedEvents) : [];
      });
    
      useEffect(() => {
        localStorage.setItem('Events', JSON.stringify(event));
      }, [event]);
      
      return (
        <Router>
            <div>
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Admin" element={<Admin event={event} setevent={setevent} />} />
                    <Route path="/Student" element={<Student event={event} />} />
                    <Route path="/form" element={<FormPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
