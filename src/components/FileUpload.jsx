import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FileUpload = () => {
    const {register,handleSubmit} = useForm()
    const [res, setres] = useState("")
    const submitHandler = async(data)=>{
        //console.log(data.file[0])
        const formData = new FormData()
        formData.append("file",data.file[0])
        formData.append("firstName",data.firstName)

        const res = await axios.post("http://localhost:3002/upload",formData)
        console.log(res.data)
        setres(res.data.cloudinaryres.secure_url)
        
    }
  return (
    <div>
        <h1>FileUpload</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>PROFILE</label>
                <input multiple type='file' {...register("file")}></input>
            </div>
            <div>
                <label>FIRSTNAME</label>
                <input type='text' {...register("firstName")}></input>
            </div>
            <div>
                <input type='submit'></input>
            </div>
        </form>
        <img src={res}></img>
    </div>
  )
}

