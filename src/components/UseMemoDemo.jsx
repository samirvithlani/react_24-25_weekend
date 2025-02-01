import React, { useMemo, useState } from "react";

export const UseMemoDemo = () => {
  const [query, setquery] = useState("");
  const [items, setitems] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
  ]);

//   const filterData = () => {
//     console.log("filtering item....");
//     return items?.filter((i) => {
//       return i.toLowerCase().includes(query.toLowerCase());
//     });
//   };

const filterData = useMemo(()=>{
    console.log("filtering value....")
    return items?.filter((i)=>{
        return i.toLowerCase().includes(query.toLowerCase())
    })
},[query,items])

  return (
    <div>
      <input
        type="text"
        placeholder="enter item to search"
        onChange={(event) => {
          setquery(event.target.value);
        }}
      ></input>
      <div>
        {filterData.map((i) => {
          return <li>{i}</li>;
        })}
      </div>
      <button onClick={()=>{setitems([...items,"kiwi"])}}>ADD</button>
    </div>
  );
};
