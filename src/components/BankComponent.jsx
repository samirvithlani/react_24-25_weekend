import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { depositAction, withdrawAction } from '../redux/BankSlice'

export const BankComponent = () => {
    const [depAmount, setdepAmount] = useState(0)
    const [withAmount, setwithAmount] = useState(0)
    const dispatch = useDispatch()
    const depositHandler = ()=>{
        //console.log(depAmount)
        //action payload
        dispatch(depositAction(parseInt(depAmount)))

    }
    const withHandler = ()=>{
        //console.log(depAmount)
        //action payload
        dispatch(withdrawAction(parseInt(withAmount)))

    }
  return (
    <div>
        <h1>BANK APP</h1>
        <h1>DEPOSIT AMOUNT</h1>
        <div>
            <label>DEP AMOUNT</label>
        <input type='text' onChange={(event)=>{setdepAmount(event.target.value)}}></input>
        </div>
        <div>
            <button onClick={()=>{depositHandler()}} className='btn btn-primary'>DEPOSIT</button>
        </div>
        <h1>WITHDRAW AMOUNT</h1>
        <div>
            <label>DEP AMOUNT</label>
        <input type='text' onChange={(event)=>{setwithAmount(event.target.value)}}></input>
        </div>
        <div>
            <button onClick={()=>{withHandler()}} className='btn btn-primary'>DEPOSIT</button>
        </div>
    </div>
  )
}
