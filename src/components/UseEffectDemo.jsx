import React, { useState } from 'react'
import { useEffect } from 'react'

export const UseEffectDemo = () => {
    //useEffect -->to handleEffect
    //()=>{}
    //[] --> Depedenacy array..
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("useEffect called....")
    },[count])
  return (
    <div>UseEffectDemo
        <h1>Count = {count}</h1>
        <button onClick={()=>{setcount(count+1)}}>INCRESE</button>
    </div>
  )
}
