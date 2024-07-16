import React from "react"
import { useState } from "react";
import './App.css'
import Add from "./Add";

const App=()=>
{
  const [event,setevent]=useState([
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
  };

  const deleteevent=(id)=>{
    const deleteitem=event.filter((i)=>i.id!==id)
    
    setevent(deleteitem)
  }

  return(
    <div>
      <button onClick={handlesubmit}className="button">Add An Event</button>

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
      <div>
        <ul>
        {event.map((i)=>(
          <li key={i.id}>
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
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default App;