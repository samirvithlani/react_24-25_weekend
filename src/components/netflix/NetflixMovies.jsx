import React from "react";
import { Link } from "react-router-dom";

export const NetflixMovies = () => {

  const movies = [
    {
      id:104,
      name:"pushpa 2"
    },
    {
      id:105,
      name:"Three..."
    }
  ]

  return (
    <div>
      <h1>Netlix Movies.</h1>
      <ul>
        <li>
          <Link to="/netflixmovies/play/101">Pushpa</Link>
        </li>
        <li>
          <Link to="play/102">KGF</Link>
        </li>
        <li>
          <Link to="play/103">RRR</Link>
        </li>
      </ul>

      <ul>
        {
          movies.map((moive)=>{
            return<li>
              <Link to={`play/${moive.id}`}>{moive.name}</Link>
            </li>
          })
        }
      </ul>
    </div>
  );
};
