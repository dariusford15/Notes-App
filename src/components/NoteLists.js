import React from 'react'
import Notes from '../components/Notes';
import AddNotes from '../components/AddNotes';

function NoteLists({notes, handleAddNote, handleDeleteNote}) {
  return (
    <>
    <div className="notes-list">
        {notes.map((note)=> 
        <Notes id={note.id} text={note.text} date={note.date}/>)}
       <AddNotes />

    </div>
    </>
  )
}

export default NoteLists;