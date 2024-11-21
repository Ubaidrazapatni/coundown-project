
"use client"

import {useState} from "react"
function State(){
const[count , setCount] = useState(0)
// variable => setter function => default value

return(

    <div className="text-center mt-4">

    <h2 className="text-3xl font-semibold">count is:{count}</h2>

  

    <button onClick={() => setCount(count+1)} className="bg-blue-700 text-white py-2 px-8 rounded-lg mt-6">Increment</button> <br/> 
    <button onClick={() => setCount(count-1)} className="bg-blue-700 text-white py-2 px-7 rounded-lg mt-4">Decrement</button> <br/> 
    <button onClick={() => setCount(0)} className="bg-red-700 text-white py-2 px-10 rounded-lg mt-4">Reset</button> 


    
    
    </div>



)
}

export default State