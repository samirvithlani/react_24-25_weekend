import React from "react";
import { useForm } from "react-hook-form";

export const Login = () => {
  const { register, handleSubmit } = useForm();

  var users = [
    {
      id: 1,
      name: "ram",
      email: "ram@gmail.com",
      role: "manager",
      password: "ram123",
    },
    {
      id: 2,
      name: "raj",
      email: "raj@gmail.com",
      role: "user",
      password: "raj123",
    },
    {
      id: 3,
      name: "amit",
      email: "amit@gmail.com",
      role: "admin",
      password: "amit123",
    },
  ];

  const submitHandler = (data) => {

    const foundUser = users.find((user)=>data.email == user.email && data.password == user.password)
    if(foundUser){
        alert("login success")
        localStorage.setItem("role",foundUser.role)
        localStorage.setItem("name",foundUser.name)
    }

  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>EMAIL</label>
          <input type="text" {...register("email")}></input>
        </div>
        <div>
          <label>PASSWORD</label>
          <input type="password" {...register("password")}></input>
        </div>
        <div>
          <input type="submit"></input>
        </div>
      </form>
    </div>
  );
};
