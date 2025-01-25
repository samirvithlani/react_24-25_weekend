import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast, ToastContainer } from "react-toastify";

export const ApiDemo2 = () => {
  //navigate

  const submutHandler = (data)=>{
    
  }


  const navigate = useNavigate();
  const addUserToDb = async () => {
    const userObj = {
      name: "pushkar1",
      age: 20,
      email: "pushkar1@gmail.com",
      isActive: true,
    };

    //url,obj
    //userObj --> req.body
    const res = await axios.post(
      "https://node5.onrender.com/user/user",
      userObj
    );
    //res -->Response class object..
    //res.data --> api response..
    console.log(res.data);
    console.log(res.status); //HTTP STATUS -->404 ,200:OK

    if (res.status == 201) {
      //alert("user added successfully...")
      toast.success('user added successfully...', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
        setTimeout(()=>{
            navigate("/apidemo1");
        },5000)
      
    }
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <button
        onClick={() => {
          addUserToDb();
        }}
      >
        ADD
      </button>
      <h1>FORM...</h1>
    </div>
  );
};
