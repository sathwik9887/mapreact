import React from "react";
import Card from "./Card";
import contact from "../contact"

function App()
{
   return <div>
   <h1 className="heading">My Contacts</h1>
   <Card 
    name={contact[0].name}
    imgURL={contact[0].imgURL}
    tel={contact[0].tel}
    email={contact[0].email}
    />
    <Card 
    name={contact[1].name}
    imgURL={contact[1].imgURL}
    tel={contact[1].tel}
    email={contact[1].email}
    />
   </div>
}
export default App;