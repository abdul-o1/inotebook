import React from "react";
import NoteContext from "../context/NoteContext";
import { useContext } from "react";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, addNote} = context;
    return (
        <>
        <AddNote/>
        <div className="row my-3">
            <h2>You Notes</h2> 
            {notes.map((note)=>{
                return <Noteitem key={note._id} note={note}/>  
            })}
            </div>
            </>
    )
}

export default Notes
