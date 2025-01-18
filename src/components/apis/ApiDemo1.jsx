import axios from 'axios'
import React, { useState } from 'react'
import { use } from 'react'

export const ApiDemo1 = () => {

    const [users, setusers] = useState([])
    const getAllUsers = async()=>{
        //await //await pending...
        //Promise<AxiosResponse<any, any>>
        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log(res.data)
        console.log(res.data.message)
        console.log(res.data.data) //array
        setusers(res.data.data)
    }

  return (
    <div>
        <h1>API DEMO 1</h1>
        <button onClick={()=>{getAllUsers()}}>GET</button>
        {/* {
            users?.map((user)=>{
                return <li>{user.name}</li>
            })
        } */}
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGe</th>
                    <th>EMAIL</th>
                </tr>
            </thead>
            <tbody>
                {
                    users?.map((user)=>{
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
