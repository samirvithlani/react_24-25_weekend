import React from "react";
import { useForm } from "react-hook-form";

export const FormDemo2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //formStat -->object
  //errors --> object --> {}
  const submitHandler = (data) => {
    console.log(data);
  };
  console.log("errors...",errors)

  var validationSchema = {
    emailValidation:{
        required:{
            value:true,
            message:"email is required"
        },
        minLength:{
            value:5,
            message:"length should >5"
        }
    }
  }


  return (
    <div>
      <h1>FORM DEMO 2</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Name</label>
          <input type="text" {...register("name",{required:{value:true,message:"Name is Required*"}})}></input>
          {/* <span>{errors.name?.message}</span> */}
          {
            errors.name  && <span>{errors.name.message}</span>
          }
        </div>
        <div>
            <label>Email</label>
            <input type="text" {...register("email",validationSchema.emailValidation)}></input>
            <span>{errors.email?.message}</span>
        </div>
        <div>
          <input type="submit" value="submit"></input>
        </div>
      </form>
    </div>
  );
};
