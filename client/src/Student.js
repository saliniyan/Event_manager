import React from "react";
import { useNavigate } from "react-router-dom";
import './Student.css';

const Student = ({ event }) => {
    const navigate = useNavigate();
    const handleform = (eventname) => {
        navigate('/form', { state: { eventname } });
    };

    return (
        <div className="event-container1">
            {event.map((i) => (
                <div key={i.id} className="event-item1">
                    <div className="event-image1">
                        {i.img ? (
                            <img src={i.img} alt={i.name} />
                        ) : (
                            <p>No image available</p>
                        )}
                        <h2 className="event-name1">{i.name}</h2>
                    </div>
                    <div className="event-details1">
                        <div className="event-info1">
                            <p className="event-date1">Starts on: {i.date}</p>
                            <p className="event-desc">About Event: 
                              <br />
                            {i.desc}</p>
                            <p className="event-location1">Location: {i.place}</p>
                        </div>
                        <button onClick={() => handleform(i.name)} className="apply-button1">
                            Apply for Event
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Student;
