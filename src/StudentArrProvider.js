import { createContext } from "react"
import { useState } from "react"


const StudentContext = createContext()



function StudentArrProvider(data){
        
    const [studentarr,setstudentarr] = useState([{id:1,name:'sai'},{id:2,name:'akash'},{id:3,name:'narane'},{id:4,name:'subash'},{id:5,name:'cameron'}])
    const [favstudentarr,setfavstudentarr] = useState([{id:1,name:'sai'}])

    return(
        <StudentContext.Provider value={{studentarr,setstudentarr,favstudentarr,setfavstudentarr}}>
           {data.children}
        </StudentContext.Provider>
    )
}

export default StudentArrProvider
export {StudentContext}