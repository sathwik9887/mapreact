import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
       <h2 className="name">{props.name}</h2>
       <Avatar img={props.img}/>    
      </div>
      <div className="bottom">
       <div>{props.tel}</div>
       <div>{props.email}</div>
      </div>
    </div>
  );
}

export default Card;
