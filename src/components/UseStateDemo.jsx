import React, { useState } from 'react'

export const UseStateDemo = () => {

    var [count,setCount] = useState(0)
    //count -- statevariable
    //setCount --> setter method :
    //useState() -->hook
    //0 inital value..
    //var count =0;
    //const [isActive, setisActive] = useState(false) boolean
    //const [users, setusers] = useState([]) array
    //const [obj, setobj] = useState({})
    const increseCount = ()=>{

        //count = count+1;
        setCount(count+1)
        console.log("count...",count)

    }
    
  return (
    <div>
        <h1 style={{color:"blue"}}>USE STATE DEMO</h1>
        <h1>Count = {count}</h1>
        <button onClick={()=>{increseCount()}}>+</button>
    </div>
  )
}
