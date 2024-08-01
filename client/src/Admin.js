import React from "react"
import { useState } from "react";
import './App.css'
import Add from "./Add";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const Admin=({event,setevent})=>
{
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');

  const handlesubmit=()=>{
    setIsFormVisible(true)
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id=event.length?event[event.length - 1].id +1 : 1
    const addnewevent={id,name:name,date:date,place:place}
    const listitem=[...event,addnewevent]
    setevent(listitem)
    setIsFormVisible(false); // hide the form after submission
    localStorage.setItem("Events",JSON.stringify(listitem))
  };

  const deleteevent=(id)=>{
    const deleteitem=event.filter((i)=>i.id!==id)
    setevent(deleteitem)
    localStorage.setItem("Events",JSON.stringify(deleteitem))
  }

  return(
    <div className="container">
      <button onClick={handlesubmit} className="button">
      <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} /> Add An Event
      </button>
      {isFormVisible && (
      <Add
      name={name}
      setName={setName}
      date={date}
      setDate={setDate}
      place={place}
      setPlace={setPlace}
      handleFormSubmit={handleFormSubmit}
    />
      )}
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
              <button  onClick={()=>deleteevent(i.id)} className="button">Delete Event</button>
            </div>
            </div>
          </li>
        ))}
      </div>
    </div>
  )
}

export default Admin;