import React, { useMemo, useState } from "react";

export const FindBombGame = () => {
  const [clickedTitles, setclickedTitles] = useState([]);
  const [gameOver, setgameOver] = useState(false);
  const [message, setmessage] = useState("Find The Bomb");

  const gridSize = 3;
  const totalTitles = gridSize * gridSize;

  //bomb position...
  const bombPosition = useMemo(
    () => Math.floor(Math.random() * totalTitles),
    [totalTitles]
  );
  console.log(bombPosition)

  const handleClick = (index)=>{
    if(index == bombPosition){
        setmessage("💣 Boom ! bomb found..")
        setgameOver(true)
    }
    else{
        setmessage("Searching...")
        setclickedTitles([...clickedTitles,index])
    }

  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{message}</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize},50px)`,
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: totalTitles }).map((_, index) => {
          return (
            <div
              key={index}
              onClick={()=>{handleClick(index)}}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                backgroundColor: clickedTitles.includes(index)
                  ? "#ddd"
                  : "#fff",
                cursor: "pointer",
              }}
            >
              { gameOver && index == bombPosition ? "💣" :""}
            </div>
          );
        })}
      </div>
      {
        gameOver && <button>
            play again
        </button>
      }
    </div>
  );
};
