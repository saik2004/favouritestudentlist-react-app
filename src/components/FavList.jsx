import { Link } from "react-router-dom"
import { useContext } from "react"
import { StudentContext } from "../StudentArrProvider"

function FavList(){
    const data = useContext(StudentContext)
   

    function handleremove(removeid){
        const temparr = data.favstudentarr.filter((items)=>{
          if(items.id === removeid){
            return false
          }else{
            return true
          }
        })

        data.setfavstudentarr(temparr)
    }

    return(
          <>
    <div className="flex gap-6 bg-black text-white p-10">
          <Link to={'/'}><h1>Student List</h1></Link> 
         <Link to={'/favstudent'}><h1>Favourite Students List</h1></Link>  
     </div>

    <div className="p-10">
        {
         data.favstudentarr.map((items)=>{
            return <div className="flex gap-10 items-center gap-15">
               <li>{items.id}. {items.name}</li>
                
               <button onClick={()=>{handleremove(items.id)}} className="bg-red-500 text-white px-2 py-1 rounded-md mb-2">Remove</button>
               </div>
         })
        }
    </div>
    </>
    )
}

export default FavList