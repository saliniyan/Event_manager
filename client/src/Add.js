import React from "react";
import './Add.css';

const Add = ({ name, setName, date, setDate, place, setPlace, handleFormSubmit }) => {
  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Event Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="place">Place:</label>
          <input type="text" id="place" value={place} onChange={(e) => setPlace(e.target.value)} required />
        </div>
        <div className="form-group">
          <button type="submit">Add Event</button>
        </div>
      </form>
    </div>
  );
};

export default Add;