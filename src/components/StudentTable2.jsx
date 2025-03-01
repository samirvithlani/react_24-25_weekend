import React from 'react'
import { useSelector } from 'react-redux'

export const StudentTable2 = () => {

    const studentState = useSelector((state)=>state.student.students)
    console.log(studentState)

  return (
    <div>
        <h1>Studnts 2</h1>
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
