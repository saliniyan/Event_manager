import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import Add from "./Add";
import './Admin.css'

const Admin = ({ event, setEvent }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [organaizerName, setOrganaizerName] = useState("");
  const [img, setImg] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [desc,setDesc]=useState("")

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id = event.length ? event[event.length - 1].id + 1 : 1;
    const addNewEvent = { id, name, date, place, organaizerName, img ,desc};
    const updatedEvents = [...event, addNewEvent];
    setEvent(updatedEvents);
    setIsFormVisible(false);
    localStorage.setItem("Events", JSON.stringify(updatedEvents));
  };

  const deleteEvent = (id) => {
    const updatedEvents = event.filter((i) => i.id !== id);
    setEvent(updatedEvents);
    localStorage.setItem("Events", JSON.stringify(updatedEvents));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter events based on search query
  const filteredEvents = event.filter((i) =>
    i.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1 className="head">Create Events here</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search events..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-input"
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </header>

      <button onClick={() => setIsFormVisible(true)} className="create-event-container">
        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
        <span>Add Event</span>
      </button>

      {/* Event Form */}
      {isFormVisible && (
        <Add
          name={name}
          setName={setName}
          date={date}
          setDate={setDate}
          place={place}
          setPlace={setPlace}
          organaizerName={organaizerName}
          setOrganaizerName={setOrganaizerName}
          handleFormSubmit={handleFormSubmit}
          img={img}
          setImg={setImg}
          desc={desc}
          setDesc={setDesc}
        />
      )}

      {/* Event Grid */}
      <div className="event-grid">
        {filteredEvents.map((i) => (
          <div className="event-card" key={i.id}>
            {i.img && <img src={i.img} alt={i.name} />}
            <div className="event-card-content">
              <h3>{i.name}</h3>
              <p>
                <strong>Starts on:</strong> {i.date}
              </p>
              <p>
                <strong>Place:</strong> {i.place}
              </p>
              <p>
                <strong>Organized By:</strong> {i.organaizerName}
              </p>
              <p>
                <strong>About Event:</strong> {i.desc}
              </p>
              <button onClick={() => deleteEvent(i.id)}>Delete Event</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
