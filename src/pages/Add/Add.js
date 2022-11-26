import './Add.css'
import { useEffect, useState } from 'react'
import uuid from 'react-uuid'

const Add = () => {
    const [all,setAll] = useState([])
    const [note,setNote] = useState('')
    const [inv,setInv] = useState({
        invNum : '',
        name: '',
        num: '',
        status: 'default',
        notes:[],
        id: uuid()
    })

    useEffect(() => {
        localStorage.setItem('allro',JSON.stringify(all))
    },[all])


    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name
        if((name === 'note') && note){
            setInv(prev =>({
                ...prev,
                notes: [...prev.notes,{val:note}]
            }))
            setNote('')
        }
        else if(name === 'submit'){
            setAll(prev => ([...prev,inv]))
            setInv({
                invNum : '',
                name: '',
                num: '',
                status: 'default',
                notes:[],
                id: uuid()
            })
        }
    }

    const handleChange = (e) => {
        const name = e.target.name
        let val = e.target.value
        if(name === 'inv/ro'){
            setInv(prev => ({
                ...prev,
                invNum: val
            }))
        }
        else if(name === 'name'){
            setInv(prev => ({
                ...prev,
                name: val
            }))
        }
        else if(name === 'num'){
            console.log(e)
            setInv(prev => {
                let valArr = val.split("")
                if(
                    val.length === 3 && prev.num.length < 3  ||
                    val.length === 7 && prev.num.length < 7
                ) {
                    valArr.push('-')
                    val = valArr.join('')
                    return {
                        ...prev,
                        num: val
                    }
                }else if(val.length === 13 ){
                    return {
                        ...prev,
                        num: val.slice(0,val.length-1)
                    }
                }else{
                    return{
                        ...prev,
                        num: val
                    }
                }
            })
        }
        else if(name === 'status'){
            setInv(prev => ({
                ...prev,
                status: val
            }))
        }
        else if(name ==='note'){
            setNote(val)
        }
    }


    return(
        <section className='add--container'>
            <form className='add--form' onSubmit={handleSubmit} action="">
                <label >
                    INV/RO #
                    <br/>
                    <input 
                        type="number" 
                        name='inv/ro'
                        onChange={handleChange}
                        value={inv.invNum}
                        required
                    />
                </label>
                <label>
                    Customer Name
                    <br/>
                    <input  
                        type="text"  
                        name='name'
                        onChange={handleChange}
                        value={inv.name}
                        required

                    />
                </label>
                <label htmlFor="">
                    Phone #
                    <br/>
                    <input 
                        name='num'
                        type="text"
                        onChange={handleChange}
                        value={inv.num}
                        required
                    />
                </label>
                <label htmlFor="">
                    Status
                    <br/>
                    <select
                        name='status' 
                        value={inv.status}
                        onChange={handleChange}
                    >
                        <option value="default" disabled>Select status</option>
                        <option value="waiting">Waiting on parts</option>
                        <option value="here" selected>Parts are here</option>
                        <option value="completed">Completed/Picked Up</option>
                    </select>
                </label>
                <button></button>
            </form> 
            <div className='add--notecontainer'>
                    <form name='note' onSubmit={handleSubmit} action="">
                        <label id='add--noteinput' htmlFor="">
                            <input 
                                onChange={handleChange}
                                type="text" 
                                placeholder='Add Note'
                                name='note'
                                value={note}
                            />
                        </label>
                    </form>
                    <div className='add--notes'>
                        <div className='add--hr'></div>
                        {
                            inv.notes.map(cur => (
                                <div key={uuid()} className='add--note'>
                                    <div className='add--bullet'></div>
                                    {cur.val}
                                </div>
                            ))
                        }
                    </div>
            </div>
            <button 
                onClick={handleSubmit} 
                id='add--submit'
                name='submit'
            >
                    Add
            </button>
        </section>
    )
}

export default Add