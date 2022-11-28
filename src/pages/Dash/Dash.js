
import Notes from '../../components/Notes/Notes'
import Waiting from '../../components/Waiting/Waiting'
import Open from '../../components/Open/Open'
import Sidebar from '../../components/Sidebar/Sidebar';

import './Dash.css'



const Dash = () => {
    return (
        <section className='dash--container'>
            <Sidebar/>
            {/* <Waiting/>
            <Open/>
            <Notes/> */}
        </section>
    )
}


export default Dash