import React from "react";

const Add=({name,setName,date,setDate,place,setPlace,handleFormSubmit})=>
{
    return(
        <form onSubmit={handleFormSubmit}>
       <input 
         type="text" 
         name="name" 
         placeholder="Event Name" 
         value={name} 
         onChange={(e) => setName(e.target.value)} 
         required
       />
       <br />
       <input 
         type="date" 
         name="date" 
         placeholder="Event Date" 
         value={date} 
         onChange={(e) => setDate(e.target.value)} 
         required 
       />
       <br />
       <input 
         type="text" 
         name="place" 
         placeholder="Event Place" 
         value={place} 
         onChange={(e) => setPlace(e.target.value)} 
         required 
       />
       <br />
       <button type="submit">Submit</button>
     </form>
      )
}

export default Add;