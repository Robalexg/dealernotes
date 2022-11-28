import "./Sidebar.css"
import { toSvg } from "jdenticon";

const Sidebar = () => {
    const svgString = toSvg("value", 100);
    console.log(svgString);
    return (
        <nav className="nav--container">

        </nav>
    )
}




// const Sidebar = () => {
//     return(
//         <nav className="nav--container">
//             <img className="nav--logo" src="../images/logo.png" alt="" />
//             <h1 className="nav--employeeid">9025</h1>
//             <div className="nav--hr"></div>
//             <div className="nav--icons">
//                 <div className="nav--home">
//                     <img src="../images/homeIcon.png" alt="" />
//                 </div>

//                 <div className="nav--add">
//                     <img src="../images/addIcon.png" alt="" />
//                 </div>

//                 <div className="nav--search">
//                     <img src="../images/searchIcon.png" alt="" />
//                 </div>

//                 <div className="nav--complete">
//                     <img src="../images/completeIcon.png" alt="" />
//                 </div>

//                 <div className="nav--returns">
//                     <img src="../images/returnsIcon.png" alt="" />
//                 </div>
//             </div>


//         </nav>
//     )
// }


export default Sidebar