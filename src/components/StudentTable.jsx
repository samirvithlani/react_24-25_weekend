import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterStudent } from '../redux/StudentRecordSlice'

export const StudentTable = () => {

    
    const studentState = useSelector((state)=>state.student.students)
    console.log("stu state...",studentState)

    const dispatch = useDispatch()
    const filterHandler = (age)=>{
        //age
        console.log("age,,,,",age)
        dispatch(filterStudent(age))
    }

  return (
    <div>
        <h1>Studnts</h1>
        <input type='text' placeholder='Search by age' onChange={(event)=>{filterHandler(event.target.value)}}/>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    studentState?.map((stu)=>{
                        return <tr>
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
