import { type } from "@testing-library/user-event/dist/type";
import avatar from "./assets/avatar.jpg";
import React, { useState } from "react";

// const Card = ({ name, type, email, children }) => {
  const Card = (props) => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-[300px] h-[200px]">
      <div className="flex items-center gap-[10px]">
        
        <img src={avatar} alt="avatar" className="w-[50px]" />
        <div>
          <h1 className="text-xl">{props.name}</h1>
          <p className="text-md">{props.type || "notype"}</p>
        </div>
      </div>
      <p className="text-md">{props.email}</p>
      <div>
        <p>Bonne élève</p>
      </div>
    </div>
  );
};
const Cards = () => {
  const students = [
    { name: "Omar", email: "omar@test.com", type: "MERN Student" },
    { name: "Rachid", email: "rashid@test.com", type: "Fullstack Student" },
    { name: "hafsa", email: "hafsa@test.com", type: "Python Student" },
    { name: "meriem", email: "meriem@test.com", type: "Fullstack" },
    { name: "yassine", email: "yassine@test.com", type: "Fullstack" },
    { name: "saad", email: "saad@test.com" },
  ];
  const [firstName, setFirstName] = useState("Rachid")

  const handleClick = () => {
    setFirstName("meriem");
  };

  return (
    <section className="grid grid-cols-3 gap-[30px] p-[30px]">
      {/* {students.map((student, index) => (
        <Card 
          key={index + student.email}
          name={student.name}
          email={student.email}
          type={student.type}
        />
      ))} */}
      <Card name="Omar" type="MERN Student">
        hello world
      </Card>
      <Card name={firstName} type="Fullstack Student">
        hello world
      </Card>
      <Card name="meriem" type="Fullstack">
        hello world
      </Card>
      <Card name="hafsa" type="Python Student">
        hello world
      </Card>
      <Card name={firstName} type="Fullstack">
        hello world
      </Card>
      <button onClick={handleClick}>change name </button>
    </section>
  );
};

export default Cards;
