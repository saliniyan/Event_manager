import React from "react"
import { useNavigate, useLocation } from "react-router-dom";
import './FormPage.css'
import { useState } from "react"; 

const FormPage=()=>{
    const [name,setname]=useState('')
    const [mail,setmail]=useState('')
    const location = useLocation()
    const navigate=useNavigate()
    const handleSubmit=(e)=>
    {
        window.alert("submitted")
        e.preventDefault()
        navigate("/Student");
        console.log(name,mail)
    }
    const {eventname} = location.state || {}
    return(
        <div className="form-page">
            <h1 className="form-title">Apply for the event {eventname}</h1>
            <form className="form-container" required onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required onChange={(e) => setname(e.target.value)}/>
            </div>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={(e) => setmail(e.target.value)}/>
            </div>
            <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )

}
export default FormPage