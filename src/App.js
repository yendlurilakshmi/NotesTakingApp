import './App.css';
import React, { useEffect ,useState} from "react";
import Header from './components/Header';
import AddNote from './components/AddNote/AddNote';
import { nanoid } from 'nanoid';
import NotesList from './components/NoteList/NoteList';
import Search from './components/Search/Search';


function App() {
  let [notes, setNotes] = useState([ ]);
  let [search,setSearch] = useState("");
  


  useEffect(()=>{
    let savedNotes = JSON.parse(localStorage.getItem('data'));

    if(savedNotes){
      setNotes(savedNotes);
    }
},[])



  useEffect(() => {
		localStorage.setItem('data',JSON.stringify(notes));
	}, [notes]);



  let handleAddNote = (note) => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    let newNote = {
      id: nanoid(),
      content: note,
      date: date
    }
    let newNotes = [...notes, newNote];
    setNotes(newNotes);
  }



  let handleDeleteNote = (id)=>{
    let newNotes=[]
    for( let note of notes)
    {
      if(note.id !== id)
      {
        newNotes.push(note);
      }
    }
    setNotes(newNotes);
  }

  

  return (
    <div className='mydiv'>
      <Header />
      <Search searchNote={setSearch} />
      <AddNote addNote={handleAddNote}  />
      <NotesList notes={notes.filter((note) =>
						note.content.includes(search)
					)} deleteNote={handleDeleteNote}/>
    </div>
  );
}

export default App;