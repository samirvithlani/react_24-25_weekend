import React from 'react'
import { MyButton } from '../MyButton'

export const NetflixHome = () => {
  const thisFunction = ()=>{
      alert("called..")
  }
  return (
    <div>
      <h1>Netflix home...</h1>
      <MyButton name="detail" class="btn btn-info" funName = {thisFunction}></MyButton>
    </div>
  )
}
