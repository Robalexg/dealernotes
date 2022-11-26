import './Home.css'

const Home = () => {
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
                <form id='home--form' action="">
                    <h1>Save time and increase productivity now</h1>
                    <input 
                        type="text" 
                        placeholder='Dealer Code'
                    />
                    <input 
                        type="text" 
                        placeholder='Employee Number'
                    />
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