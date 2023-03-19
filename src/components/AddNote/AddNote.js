import React from 'react';
import './AddNote.css';
import { useState } from 'react';

function AddNote({ addNote }) {
  let [content, setContent] = useState("");
  let handleChange = (e) => {
    setContent(e.target.value);
  }

  let handleSave = () => {
    if (content.length === 0) {
      alert("Please Insert a valid Note!")
    }
    if (content.length > 0) {
      addNote(content);
      setContent("");
    }
  }

  return (
    <div>
      <div className='container'>
        <textarea className='container-textarea' placeholder='Type here to add a note' value={content} onChange={handleChange}> </textarea>
        <button className='container-button' onClick={handleSave} > Save</button>

      </div>
    </div>
  )
}

export default AddNote;
