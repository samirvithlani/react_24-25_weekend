import axios from "axios";
import React, { useEffect, useState } from "react";
import { use } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthorization";

export const ApiDemo1 = () => {
  const [users, setusers] = useState([]);
  const [show, setshow] = useState(false);
  const [user, setuser] = useState({});

  const {isAdmin} =useAuthentication()

  const getAllUsers = async () => {
    //await //await pending...
    //Promise<AxiosResponse<any, any>>
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res.data);
    console.log(res.data.message);
    console.log(res.data.data); //array
    setusers(res.data.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const detailUser = async (id) => {
    const res = await axios.get("https://node5.onrender.com/user/user/" + id);
    setuser(res.data.data);
    setshow(true);
    //api...
  };
  const handleClose = () => {
    setshow(false);
  };
  const deleteUser = async (id) => {
    //delete api..
    const res = await axios.delete(
      "https://node5.onrender.com/user/user/" + id
    );
    // console.log(res)
    if (res.status === 204) {
      //alert("record deleted..")
    }
    getAllUsers(); //to get updated record..
  };
  return (
    <div>
      <h1>API DEMO 1</h1>
      {/* <button onClick={()=>{getAllUsers()}}>GET</button> */}
      {/* {
            users?.map((user)=>{
                return <li>{user.name}</li>
            })
        } */}
      <table className="table table-dark">
        <thead>
          <tr>
            {
              isAdmin && <th>ID</th>
            }
            
            <th>NAME</th>
            <th>AGe</th>
            <th>EMAIL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return (
              <tr>
                {
                  isAdmin &&   <td>{user._id}</td>
                }
                
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      detailUser(user._id);
                    }}
                    className="btn btn-info"
                  >
                    DETAIL
                  </button>
                  {
                    isAdmin &&
                    <Button
                    variant="danger"
                    onClick={() => {
                      deleteUser(user._id);
                    }}
                  >
                    DELETE
                  </Button>
                  }
                  
                  <Link to={`/edituser/${user._id}`} className="btn btn-warning">UPDATE</Link>
                  {/* <Button variant='info'>DEtail</Button> */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>USer Name ={user.name}</h1>
          <p>Email = {user.email}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
