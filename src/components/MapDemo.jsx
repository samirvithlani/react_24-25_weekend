import React from "react";
import { use } from "react";

export const MapDemo = () => {
  var users = ["raj", "jay", "parth", "kunal", "amit"];
  var students = [
    {
        id:1,
        name:"ram",
        age:23
    },
    {
        id:2,
        name:"shyam",
        age:25
    },
    {
        id:3,
        name:"amit",
        age:22
    }
  ]
  return (
    <div>
      {/* {users.map((user) => {
        return (<p>{user}</p>)
      })} */}

      {
        users.map((user)=>{
            return(
                <p>
                    {/* <span style={{color:"green"}}>{user}</span> */}
                    <span style={{color:user.length>3?"green":"black"}}>{user}</span>
                </p>
            )
        })
      }
        <h1>STUDENTS</h1>
        {
            students.map((stu)=>{
                return(<div>
                    <h1>Name = {stu.name}</h1>
                    <p>age = {stu.age}</p>
                </div>)
            })
        }
    </div>
  );
};
