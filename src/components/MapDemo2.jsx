import React from 'react'

export const MapDemo2 = () => {

    var users = ["ram","shyam","seeta","geeta","hari"]
    //forEach --> void
    //Map --> array
    var students =[
        {
            id:1,
            name:"raj"
        },
        {
            id:2,
            name:"parth"
        }
    ]

  return (
    <div>
        <h1>Map</h1>
        {/* <h1>{users[0]}</h1>
        {
            users.map((user)=>{
                return (
                <h1>{user}</h1>
                )
            })
        } */}
        {/* {
            for(let i=0;i<students.length;i++){
                students[i]
            }
        } */}

        {
            students.map((stu,i)=>{
                return <div>
                    {i}
                    <h1>Name = {stu.name}</h1>
                    <h2>Id= {stu.id}</h2>
                </div>
            })
        }
    </div>
  )
}
