import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

  const  {register,handleSubmit} = useForm()
  //register state variable...
  //handleSubmit function

  const submitHandler = (data)=>{

    //alert("form subbmited...")
    console.log(data) // {name:"akjhsaljsa"}
    
  }

  return (
    <div>
        <h1>FORM DEMO 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div>
            <label>NAME:</label>
            <input type='text' placeholder='enter name' {...register("name")}></input>
          </div>
          <div>
            <label>AGE</label>
            <input type='number' placeholder='enter age' {...register("age")}></input>
          </div>
          <div>
            <input type='submit' value="submit"></input>
          </div>
        </form>
    </div>
  )
}
