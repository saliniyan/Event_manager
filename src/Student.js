import React from "react";
const Student=({event})=>
{
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
              <button>Apply for Event</button>
            </div>
            </div>
          </li>
        ))}
      </div>
    )
}
export default Student;