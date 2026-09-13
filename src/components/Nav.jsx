import List from "./List"
import { Link } from "react-router-dom"

function Nav(){
    return(
    <>
    <div className="flex gap-6 bg-black text-white p-10">
           <Link to={'/'}><h1>Student List</h1></Link>
         <Link to={'/favstudent'}><h1>Favourite Students List</h1></Link>  
     </div>

     <div>
        <List/>
     </div>
    </>
     
 )
}

export default Nav