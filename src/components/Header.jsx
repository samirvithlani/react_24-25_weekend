import React from 'react'
//Link rel sty hre..
import "../assets/css/header.css"

export default function Header(props) {
  console.log("header props",props)
  //props {}
  //props{title:"REACT"}
  return (
    <div className="header">
        <h1>HEADER COMPONENT</h1>
        <h2>{props.title}</h2>
    </div>
  )
}
