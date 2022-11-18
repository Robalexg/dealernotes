import { useEffect, useState } from 'react'
import uuid from 'react-uuid';
import './Dash.css'


const Dash = () => {
    const [notes,setNotes] = useState(  JSON.parse(localStorage.getItem("notes")) )
    const [noteText,setNoteText] = useState('')

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

    localStorage.setItem("notes",JSON.stringify(notes))  


    return (
        <section className='dash--container'>
            <div className='dash--waiting'>
                Waiting
                <span className='dash--hr'></span>
            </div>

            <div className='dash--open'>
                Open
                <span className='dash--hr'></span>
            </div>

            <div className='dash--notes'>
                <form  onSubmit={handleSubmit}  >
                    <input 
                        onChange={handleChange}
                        type="text" 
                        placeholder='Add Note'
                        value={noteText}
                    />
                </form>
                <span className='dash--hr'></span>
                <div className='dash--notecontainer'>
                {
                    notes.map(note => {
                        return (
                            <div key={note.id} id={note.id} className='dash--note'>
                                <div className='dash--notebullet'></div>
                                {note.text}
                                <img 
                                    className='dash--trash'
                                    src="../images/trashIcon.png"
                                    onClick={handleDelete}
                                />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}


export default Dash