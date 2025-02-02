import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const EditUser = () => {
  const id = useParams().id;

  //react-hook-form
  const { register, handleSubmit } = useForm({
    defaultValues:async()=>{
        const res = await axios.get("https://node5.onrender.com/user/user/"+id)
        return res.data.data
        // return {
        //     name1:res.data.data.name
        // }
    }
  });
  
  const navigate = useNavigate()
  
  const submitHandler = async(data) => {
    console.log("data.....",data);
    delete data._id
    try{
    const res = await axios.put("https://node5.onrender.com/user/user/"+id,data)
    console.log(res)
    navigate("/apidemo1")

    }catch(err){
        alert("error while update data..")
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")}></input>
        </div>
        <div>
          <label>AGE</label>
          <input type="age" {...register("age")}></input>
        </div>
        <div>
          <label>Email</label>
          <input type="text" {...register("email")}></input>
        </div>
        <div>
          <input type="submit" value="submit"></input>
        </div>
      </form>
    </div>
  );
};
