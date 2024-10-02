import React from "react";
import './Add.css';

const Add = ({ name, setName, date, setDate, place, setPlace, handleFormSubmit, organaizerName, setOrganaizerName, img, setImg ,desc,setDesc}) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result); // Store image as a base64 URL
      };
      reader.readAsDataURL(file);
    }
  };

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
          <label htmlFor="organaizerName">Organizer Name:</label> 
          <input type="text" id="organaizerName" value={organaizerName} onChange={(e) => setOrganaizerName(e.target.value)} required /> 
        </div>
        <div className="form-group">
          <label htmlFor="desc">Event Description</label> 
          <input type="text" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} required /> 
        </div>
        <div className="form-group">
          <label htmlFor="img">Event Image:</label>
          <input type="file" id="img" accept="image/*" onChange={handleImageChange} />
          {img && <img src={img} alt="Preview" style={{ width: '100px', marginTop: '10px' }} />}
        </div>
        <div className="form-group">
          <button type="submit">Add Event</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
