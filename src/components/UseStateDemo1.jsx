import React, { useState } from 'react'

export const UseStateDemo1 = () => {

    const [isLoading,setIsLoading] = useState(true)

    const stopLoder  =()=>{

            //isLoading = false
            setIsLoading(false)
    }

  return (
    <div>
        <h1>Use State Demo 2</h1>
        {
            isLoading==true?<h1>Loading...</h1>:""
        }
        {
            isLoading==true && <h1>Loader....</h1>
        }
        <button onClick={()=>{stopLoder()}}>stop loading</button>
        <button onClick={()=>{setIsLoading(false)}}>stop loading 1</button>
    </div>
  )
}
