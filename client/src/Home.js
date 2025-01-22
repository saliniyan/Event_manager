import React from "react";
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1 className="main-heading">Welcome to Event Manager</h1>
                <p className="sub-heading">
                    Your ultimate solution to create, manage, and participate in college events!
                </p>
            </header>
            <div className="banner">
                <div className="banner-content">
                    <h2 className="tagline">Organize Events Seamlessly</h2>
                    <p className="description">
                        Experience the excitement of campus life like never before.<br />
                        From event creation to participant management, we’ve got you covered.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
