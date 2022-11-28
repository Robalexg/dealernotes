import './Home.css'
import {useForm} from 'react-hook-form'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'


const Home = () => {
    const {register, handleSubmit, watch, formState:{errors}} = useForm()
    const [user,setUser] = useState({
        dealerCode: '',
        employeeNum: '',
        error: false
    })
    const navigate = useNavigate();
    const handleForm = (data) => {
        if(data.dealerCode === '04483' && data.employeeNum === '9025'){
            navigate('/profile')
        }else{
            setUser(prevUser => ({...prevUser,error:true}))
        }
    }

    const handleChange = (e) => {
        const name = e.target.name
        const val = e.target.value
        setUser(prev => ({...prev,[name]:val,error:false}))
    }



    return(
       <section className='home--container'>
            <img id='home--logo' src="../images/logo.png" alt="" />

            <h1 id='home--title'>
                Maximum repair order 
                utility and efficiency
            </h1>

            <h2 id='home--subtitle'>
                Sick of looking at an outdated dealership 
                repair order systems?
            </h2>

            <div className='home--formcontainer' action="">
                <form onSubmit={handleSubmit(handleForm)} id='home--form' action="">
                    <h1>Save time and increase productivity now</h1>
                    <input 
                        {...register('dealerCode',{required:true,pattern: /\d/g })}
                        type="text" 
                        placeholder='Dealer Code'
                        name='dealerCode'
                        onChange={handleChange}
                        value={user.dealerCode}
                    />
                    {
                        errors.dealerCode && 
                        <span className='home--error'> 
                            Please Enter Dealer Code
                        </span>
                    }
                    {
                        user.error && 
                        <span className='home--error'> 
                            User Not Found
                        </span>
                    }
                    <input 
                        {...register('employeeNum',{required:true,pattern: /\d/g})}
                        type="text" 
                        placeholder='Employee Number'
                        name='employeeNum'
                        onChange={handleChange}
                        value={user.employeeNum}
                    />
                    {
                        errors.employeeNum && 
                        <span className='home--error'> 
                            Please Enter Employee Number
                        </span>
                    }
                    {
                        user.error && 
                        <span className='home--error'> 
                            User Not Found
                        </span>
                    }

                    <button>Login</button>
                </form>
            </div>


       </section>
    )
}

export default Home

// const Home = () => {
//     return(
//        <section className='home--container'>
//             <img className='home--logo' src="../images/logo.png" alt="" />
//             <div className='home--formcontainer'>
//                     <h1>Enter Dealer Code</h1>
//                     <input type="number"  />
//                     <h1>Enter Employee ID</h1>
//                     <input type="number" />
//             </div>
//        </section>
//     )
// }