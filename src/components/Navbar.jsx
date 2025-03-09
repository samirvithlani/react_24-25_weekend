import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeTheme, resetTheme } from "../redux/ThemeSlice";
import { PURGE } from "redux-persist";

export const Navbar = () => {
  //const state = useSelector((state)=>state)
  //console.log("navbar state...",state)

  
  

  const cartState = useSelector((state)=>state.cart)
  console.log(cartState)
  const bankState = useSelector((state)=>state.bank)

  const dispatch = useDispatch()
  const logoutHandler = ()=>{
    dispatch(resetTheme())
    dispatch({type:PURGE, key:"root", result:()=>null})
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark  bg-dark">
        <Link class="navbar-brand" to="/dashboard">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              {/* <a class="nav-link" href="/netflixhome">
                Home 
              </a> */}
              <Link to="/netflixhome" className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/netflixmovies" className="nav-link">
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/formdemo1" className="nav-link">
                FORM DEMO 1
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/genmcq" className="nav-link">
                genmcq
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/apidemo1" className="nav-link">
                API DEMO 1
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/apidemo2" className="nav-link">
                API DEMO 2
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/useeffectdemo" className="nav-link">
                {" "}
                useeffectdemo
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/useMemoDemo" className="nav-link">
                {" "}
                useMemoDemo
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/products" className="nav-link">
                {" "}
                products
              </Link>
            </li>
            
            <li class="nav-item">
              <Link to="/content" className="nav-link">
                {" "}
                content
              </Link>
            </li>
            
            
            {/* <li class="nav-item">
              <Link to="/findbomb" className="nav-link">
                {" "}
                findbomb
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/login" className="nav-link">
                {" "}
                login
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/productcomponent" className="nav-link">
                products
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/bankapp" className="nav-link">
                BANK APP
              </Link>
            </li>
            
            <li class="nav-item">
              <Link to="/sturecords" className="nav-link">
              sturecords
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/sturecords2" className="nav-link">
              sturecords2
              </Link>
            </li> */}
            <li className="nav-item">
              <h1>{cartState.cart?.length}</h1>
            </li>
            <li className="nav-item">
              <h1>{bankState.balance}</h1>
            </li>
            <li className="nav-item">
              <button onClick={()=>{
                dispatch(changeTheme())
              }}>CHANGE THEME</button>
            </li>
            <li class="nav-item">
              <Link to="/bankapp" className="nav-link">
                BANK APP
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/muibutton" className="nav-link">
              muibutton
              </Link>
            </li>
            
          </ul>
          <li class="nav-item">
              <button onClick={()=>{logoutHandler()}}>logout</button>
            </li>
        </div>
      </nav>
    </div>
  );
};
