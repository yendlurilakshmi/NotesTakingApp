import React from 'react';
import { TbTrashXFilled } from 'react-icons/tb';
import './Note.css';

const Note = ({id, content , date , deleteNote}) => {
  return (
    <div className='note'>
      <span> {content} </span>
      <div className='footer'>
          <small>{date}</small>
          <TbTrashXFilled className='delete'  onClick={ () => deleteNote(id)}/>
      </div>
    </div>
  );
};

export default Note;
