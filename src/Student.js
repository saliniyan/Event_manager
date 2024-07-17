import React from "react";
import {useNavigate } from "react-router-dom";
const Student=({event})=>
{
  const navigate=useNavigate()
  const handleform=(eventname)=>
  {
    navigate('/form',{state:{eventname}})
  }
    return(
        <div className="list">
        {event.map((i)=>(
          <li key={i.id}>
           <div className="event-item">
              <div className="container">
                <div className="inner-container">
                Event name: {i.name}
                <br />
                starts on: {i.date}
                <br />
                On: {i.place}
              </div>
              <button onClick={()=>handleform(i.name)}>
                Apply for Event
              </button>
            </div>
            </div>
          </li>
        ))}
      </div>
    )
}
export default Student;