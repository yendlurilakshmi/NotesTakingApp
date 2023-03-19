import React from "react";
import Note from "../note/Note";
import './NoteList.css';



const NotesList = ( { notes , deleteNote } ) => {
  
    return (
        <div className="NoteList">
            {notes.map((note) => <Note id={note.id} content={note.content} date={note.date} deleteNote={deleteNote} />)}

        </div>
    );
};

export default NotesList;