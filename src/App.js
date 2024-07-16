import React from "react";
import { useState } from "react";
import Admin from "./Admin";
import Student from "./Student";
const App = () => {
    const [event,setevent]=useState
    ([
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

    const [admin,setadmin]=useState(false)

    return(
        <div>
        <button onClick={()=>setadmin(!admin)}>Admin</button>
        {admin && <Admin event={event} setevent={setevent}/>}
        <hr />
        <Student event={event}/>
        </div>
    )
};

export default App;
