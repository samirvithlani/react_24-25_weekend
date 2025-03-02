import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../redux/ContentSlice'

export const ContentComponent = () => {
    const dispatch = useDispatch()
    const contentState = useSelector((state)=>state.content)
    console.log(contentState)

    useEffect(() => {
      dispatch(fetchUsers())
    }, [])
    
    
  return (
    <div>
        <h1>CONTENT...</h1>
        {
            contentState.isLoading && <h1>LOADING.....</h1> 
        }
        
    </div>
  )
}
