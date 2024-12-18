import React from 'react'
import { City } from './City'

export const Country = () => {

    const getCountryCode = ()=>{
        alert("country code is +91")
    }
  return (
    <div>
        <h1>COuntry...</h1>
        <button onClick={getCountryCode}>get code from country</button>
        <button onClick={()=>{getCountryCode()}}>get code from country</button>

        <City getCountryCode={getCountryCode}></City>
    </div>
  )
}
