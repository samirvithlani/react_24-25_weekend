import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

  const  {register,handleSubmit} = useForm()
  const [userData, setuserData] = useState({})
  const [isFormSubbmited, setisFormSubbmited] = useState(false)
  //register state variable...
  //handleSubmit function

  const submitHandler = (data)=>{

    //alert("form subbmited...")
    console.log(data) // {name:"akjhsaljsa"}
    setuserData(data)
    setisFormSubbmited(true) //
    
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
            <label>GENDER</label><br></br>
            MALE:<input type='radio' name='gender' value="male" {...register("gender")}></input><br></br>
            FEMALE:<input type='radio' name='gender' value="female" {...register("gender")}></input>
          </div>
          <div>
            <label>SELECT COUNTRY</label>
            <select {...register("country")}>
              <option value="india">INDIA</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </div>
          <div>
            <label>COLOR</label>
            <input type='color' {...register("color")}></input>
          </div>
          <div>
            <input type='submit' value="submit"></input>
          </div>
        </form>
{
  isFormSubbmited &&
        <div style={{color:userData.color}}>
          <h1>RESULT</h1>
          <h1>NAme = {userData.name}</h1>
          <h2>AGe = {userData.age}</h2>
          <h2>gender = {userData.gender}</h2>
          <h3>Country = {userData.country}</h3>
        </div>
}
    </div>
  )
}
