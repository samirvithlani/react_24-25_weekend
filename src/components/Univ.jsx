import React from 'react'
import { Collage } from './Collage'

export const Univ = () => {


    const checkUni = ()=>{
        console.log("function checkUni called...")
    }

  return (
    <div>
        <h1>UNI...</h1>
        <button onClick={checkUni}>check UNI from UNI</button>
        <button onClick={()=>{checkUni()}}>check UNI from UNI 1</button>
        <Collage check ={checkUni}></Collage>
    </div>
  )
}
