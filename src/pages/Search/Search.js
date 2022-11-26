import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './Search.css'


const Search = () => {
    const [IsOpen,setIsOpen] = useState(false)
    const [ro, setRo] = useState({
        notes:[]
    })


    const findRo = (roNum) => {
        const all = JSON.parse(localStorage.getItem('allro'))
        return all.filter(ro => ro.invNum === roNum)[0]
    }
    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = (e) => {
        const roNum = e.target.id
        setRo(findRo(roNum))
        setIsOpen(true)
    }

    return (
        <section className='search--container'>
            <input 
                id='search--input'
                type="text" 
                placeholder='Search RO'
            />

            <div className='search--recent'>
                {
                    JSON
                    .parse(localStorage.getItem('allro'))
                    .map(ro => (
                        <div  
                            onClick={openModal}
                            className='search--ro'
                            id={ro.invNum}
                        >
                            {ro.invNum}
                        </div>
                    ))
                }
            </div>

            <Modal
                isOpen={IsOpen}
                className='search--modal'
            >   
                <span>
                    Invoice # : {ro.invNum}
                </span>
                <span>
                    Name : {ro.name}
                </span>
                <span>
                    Status : {ro.status}
                </span>
                <div className='search--notecontainer'>
                    <h1>notes</h1>
                    {
                        ro.notes.map(note => (
                            <div className='search--note'>
                                <div className='search--bullet'></div>
                                {note.val}
                            </div>
                        ))
                    }
                </div>
                <button id='search--close' onClick={closeModal}>close</button>
            </Modal>

        </section>
    )
}

export default Search