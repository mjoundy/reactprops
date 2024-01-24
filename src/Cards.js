import React from "react";
import avatar from "./assets/avatar.jpg";

const Card = (props) => {
  return (
    <div className="bg-red-400 rounded-md w-[300px] p-[20px]">
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
    { name: "Rashid", email: "rashid@test.com", type: "Fullstack Student" },
    { name: "Hafsa", email: "hafsa@test.com", type: "Python Student" },
    { name: "Meriem", email: "meriem@test.com", type: "Fullstack" },
    { name: "yassine", email: "yassine@test.com", type: "Fullstack" },
    { name: "saad", email: "saad@test.com" },
  ];
  return (
    <section className="grid grid-cols-3 gap-[20px] p-[20px]">
      {students.map((student) => (
        <Card name={student.name} email={student.email} type={student.type} />
      ))}
    </section>
  );
};

export default Cards;
