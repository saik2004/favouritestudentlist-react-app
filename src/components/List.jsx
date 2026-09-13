import { useContext } from "react";
import { StudentContext } from "../StudentArrProvider";
import '../index.css';
import { useState } from "react";

function List() {
  const data = useContext(StudentContext);
  
  const [buttonaction,setbuttonaction] = useState(false)
  function handlebutton(id,name){
      data.setfavstudentarr([...data.favstudentarr,{id:id,name:name}])
      setbuttonaction(true)
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-medium mb-3">Student List</h1>
    <ul className="font-medium">
         {data.studentarr.map((items,index) => {
          
          const isFavourite = data.favstudentarr.some((fav) => fav.id === items.id);
           
          return <div className="flex gap-10 items-center gap-15">
               <li>{items.id}. {items.name}</li>
                
               <button onClick={()=>{handlebutton(items.id,items.name)}} className="bg-black text-white px-2 py-1 rounded-md mb-2 cursor-pointer" style={isFavourite ? { backgroundColor: "grey", cursor: 'not-allowed' } : {} }>Add to Favourite</button>
               </div>
      })}
    </ul>
     
    </div>
  );
}

export default List;
