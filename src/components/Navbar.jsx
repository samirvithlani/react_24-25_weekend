import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
              <Link to="/findbomb" className="nav-link">
                {" "}
                findbomb
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
