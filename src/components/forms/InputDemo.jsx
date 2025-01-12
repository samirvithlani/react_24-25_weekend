import React, { useState } from 'react'

export const InputDemo = () => {
    const [name, setname] = useState("")
    const [age, setage] = useState("")
    const [isSubbmited, setisSubbmited] = useState(false)

    const nameHandler = (event)=>{
        //console.log(event)
        //console.log(event.target.value)
        setname(event.target.value)
        
    }
    const submitHandler = ()=>{
        setisSubbmited(true)
    }
  return (
    <div>
        <div>
            <label>Name</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>AGe</label>
            <input type='text' onChange={(event)=>{setage(event.target.value)}}></input>
            {/* {age} */}
        </div>
        <div>
            <button onClick={()=>{submitHandler()}}>add</button>
        </div>
        {
            isSubbmited &&<div>
            <h1>OUTPUT</h1>
            <h1>Name = {name}</h1>
            <h2>Age = {age}</h2>
        </div>
        }
        <div>
            <label>SELECT COUNTRY</label>
            <select>
                <option value="india">INDIA</option>
                <option value="india">INDIA</option>
                <option value="india">INDIA</option>
            </select>
        </div>
        <div>
            <label>SELECT COUNTRY</label>
            <select>
                <option value="india">INDIA</option>
                <option value="india">INDIA</option>
                <option value="india">INDIA</option>
            </select>
        </div>
    </div>
  )
}
