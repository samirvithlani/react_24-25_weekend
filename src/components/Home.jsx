//rafc rfc
import React from "react";

export const Home = (props) => {
  const homeStyle = {
    height: "300px",
    backgroundColor: "yellow",
  };

  return (
    <div style={homeStyle}>
      {/* <h1 style="color:red;">HOME COMPONENT</h1> */}
      <h1 style={{ color: "red" }}>HOME</h1>
      <h1>Country {props.address.country}</h1>
      <h2>City {props.address.city}</h2>
    </div>
  );
};
