import React from "react";
import {useNavigate } from "react-router-dom"
import './Student.css'

const Student=({event})=>
{
  const navigate=useNavigate()
  const handleform=(eventname)=>
  {
    navigate('/form',{state:{eventname}})
  }
  return(
    <div className="event-container1">
    {event.map((i) => (
      <div key={i.id} className="event-item1">
      <h2 className="event-name1">{i.name}</h2>
      <div className="event-image1">
      <img src="https://www.calcuttayellowpages.com/cimage35/112239college_01.jpg" alt={i.name} />
      </div>
      <div className="event-details1">
      <div className="event-info1">
      <p>Starts on: {i.date}</p>
      <p>Location: {i.place}</p>
      </div>
      <button onClick={() => handleform(i.name)} className="apply-button1">
      Apply for Event
      </button>
      </div>
      </div>
    ))}
  </div>
  
  )
}
export default Student;