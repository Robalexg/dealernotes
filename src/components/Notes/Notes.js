import './Notes.css'
import { useEffect, useState } from 'react'
import uuid from 'react-uuid';


const Notes = () => {
    const [notes,setNotes] = useState(  JSON.parse(localStorage.getItem("notes")) )
    const [noteText,setNoteText] = useState('')

    useEffect(() => {
        localStorage.setItem("notes",JSON.stringify(notes))  
    },[notes])

    const handleChange = (e) =>{
        const value = e.target.value
        setNoteText(value)
        console.log(JSON.parse(localStorage.getItem("notes")))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(noteText){
            setNotes((prevNote) => {
                return [
                    {
                        text: noteText,
                        id: uuid()
                    }
                    ,
                    ...prevNote
                ]
            })
            setNoteText('')  
        }
    }

    const handleDelete = (e) => {
        let id = e.target.parentElement.id
        setNotes((prevNote) => {
            console.log(prevNote[0])
            return prevNote.filter( note => id !== note.id) 
        })
    }
 
    return(
        <div className='notes--container'>
                <form  onSubmit={handleSubmit}  >
                    <input 
                        onChange={handleChange}
                        type="text" 
                        placeholder='Add Note'
                        value={noteText}
                    />
                </form>
                <span className='hr'></span>
                <div className='note--notecontainer'>
                {
                    notes.map(note => {
                        return (
                            <div key={note.id} id={note.id} className='note--note'>
                                <div className='notes--bullet'></div>
                                {note.text}
                                <img 
                                    className='note--trash'
                                    src="../images/trashIcon.png"
                                    onClick={handleDelete}
                                />
                            </div>
                        )
                    })
                }
                </div>
        </div>
    )
}

export default Notes