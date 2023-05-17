import React from "react";
import NoteContext from "../context/NoteContext";
import { useContext } from "react";
import Noteitem from "./Noteitem";


const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, setNotes} = context;
    return (
        <div className="row my-3">
            <h2>You Notes</h2> 
            {notes.map((note)=>{
                return <Noteitem key={note._id} note={note}/>  
            })}
            </div>
    )
}

export default Notes
