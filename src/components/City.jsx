import React from 'react'

export const City = (props) => {
  return (
    <div>
        <h1>City component..</h1>
        <button onClick={props.getCountryCode}>get code from city</button>
        <button onClick={()=>{props.getCountryCode()}}>get code from city</button>
    </div>
  )
}
