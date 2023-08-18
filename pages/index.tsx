import { NextPage } from "next"
import { useState } from "react"
import "../styles/globals.css"

const Home:NextPage = () =>{
    const [counter, setCounter] = useState(0)
    
    return <div className="bg-red-200 h-screen">
        Hello {counter}
        <button className="border" onClick={()=>setCounter(prev => prev+1)}>+</button>
    </div>
}

export default Home