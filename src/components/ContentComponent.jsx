import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers,addUser } from '../redux/ContentSlice'

export const ContentComponent = () => {
    const dispatch = useDispatch()
    const contentState = useSelector((state)=>state.content)
    console.log(contentState)

    useEffect(() => {
      dispatch(fetchUsers())
    }, [])

    const addUser1 = ()=>{
        dispatch(addUser({name:"ram",age:25,email:"ram@gmail.com",isActive:true}))
    }
    
    
  return (
    <div>
        <h1>CONTENT...</h1>
        {
            contentState.isLoading && <h1>LOADING.....</h1> 
        }
        <button onClick={addUser1}>ADD USER</button>
    </div>
  )
}
