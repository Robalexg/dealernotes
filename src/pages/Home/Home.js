import './Home.css'

const Home = () => {
    return(
       <section className='home--container'>
            <img className='home--logo' src="../images/logo.png" alt="" />
            <div className='home--formcontainer'>
                    <h1>Enter Dealer Code</h1>
                    <input type="number"  />
                    <h1>Enter Employee ID</h1>
                    <input type="number" />
            </div>
       </section>
    )
}

export default Home