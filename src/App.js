import React from "react";
import { useState } from "react";
import Admin from "./Admin";
import Student from "./Student";
import Home from "./Home"
import { BrowserRouter as Router ,Route, Routes ,Link } from "react-router-dom";

const App = () => {
    const [event,setevent]=useState
    ([  
    {
    id:0,
    name:'hackathon',
    date:'2-3-2024',
    place:'ai dept'
    },
    {
    id:1,
    name:'codeathon',
    date:'1-4-2024',
    place:'it dept'
    }
    ])

    return(
        <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/Student">Student</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Admin" element={<Admin event={event} setevent={setevent} />} 
                />
                <Route path="/Student" element={<Student event={event} />}
                />
            </Routes>
        </div>  
        </Router>
    )
};

export default App;
