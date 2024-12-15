import React, { useState } from 'react'

export const UseStaeDemo2 = () => {
    const [user, setuser] = useState({
        id:1,
        name:"raj",
        age:23
    })
    

    const changeData = ()=>{
        // setuser({
        //     id:user.id+1000,
        //     name:user.name.toUpperCase(),
        //     age:user.age
        //     })

        // ... spread operator...
        setuser({
            ...user,
            name:user.name.toUpperCase(),
            salary:1000
            
        })
    }

  return (
    <div>
        <h1>Use satte demo 2</h1>
        
        <h1>Name = {user.name}</h1>
        <h2>Age = {user.age}</h2>
        <h3>Id = {user.id}</h3>
        {
            user.salary &&  <h3>salary = {user.salary}</h3>
        }
        
        <button onClick={()=>{changeData()}}>change data</button>
    </div>
  )
}
