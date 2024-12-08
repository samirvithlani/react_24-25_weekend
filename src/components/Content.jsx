import React from 'react'
import { SubContent } from './SubContent'

export const Content = (props) => {
  var x =100
  return (
    <div>
        <h1>CONTENT</h1>
        {/* <h1>title ={title}</h1>
        <h2>city {city}</h2> */}
        {props.title}
        {props.city}
        <SubContent title ={props.title} x = {x}></SubContent>
    </div>
  )
}
