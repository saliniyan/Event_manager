import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import Add from "./Add";
import './Admin.css';

const Admin = ({ event, setEvent }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [organaizerName, setOrganaizerName] = useState("");
  const [img, setImg] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [visibleParticipants, setVisibleParticipants] = useState({}); // Track visible participants for each event
  const [eventParticipants, setEventParticipants] = useState({}); // Store participants for each event

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const id = event.length ? event[event.length - 1].id + 1 : 1;
    const addNewEvent = { id, name, date, place, organaizerName, img, desc };
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

  // Fetch participants from API based on event name
  const fetchParticipants = async (eventName) => {
    if (eventParticipants[eventName]) {
      // Toggle visibility if already fetched
      setVisibleParticipants((prev) => ({ ...prev, [eventName]: !prev[eventName] }));
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:8006/api/students");
      const data = await response.json();

      // Filter participants that match the event name
      const eventParticipantsList = data.filter(participant => participant.event === eventName);
      
      setEventParticipants((prev) => ({ ...prev, [eventName]: eventParticipantsList }));
      setVisibleParticipants((prev) => ({ ...prev, [eventName]: true }));
    } catch (error) {
      console.error("Error fetching participants:", error);
    } finally {
      setLoading(false);
    }
  };

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

              <br />
              <button onClick={() => fetchParticipants(i.name)}>
                {visibleParticipants[i.name] ? "Hide Participants" : "View Participants"}
              </button>

              {/* Loading indicator */}
              {loading && <p>Loading participants...</p>}

              {/* Participants List for this event */}
              {visibleParticipants[i.name] && eventParticipants[i.name] && (
                <div className="participants-list">
                  <h4>Participants:</h4>
                  <ul>
                    {eventParticipants[i.name].map((participant) => (
                      <li key={participant.id} className="participant-card">
                        <div className="participant-details">
                          <p className="participant-name">
                            <strong>Name:</strong> {participant.name}
                          </p>
                          <p className="participant-email">
                            <strong>Email:</strong> {participant.mail}
                          </p>
                          <p className="participant-time">
                            <strong>Time:</strong> {new Date(participant.time).toLocaleString()}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
