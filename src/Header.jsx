import React from "react";
import icone from "./assets/icone.jpg";

const Header = () => {
  return (
    <header className='flex justify-between items-center p-[10px] bg-current'>
      <img src={icone} alt="icone" className="w-[150px]" />
      <ul className="flex gap-[50px] text-xl">
        <li className= "hover:cursor-col-resize text-white font-bold text-xl">
          <a href="/">Home</a>
        </li>
        <li className="hover:bg-blue-500 text-white font-bold text-xl">
          <a href="/">About</a>
        </li>
        <li className="text-white font-bold text-xl">
          <a href="/">Services</a>
        </li>
        <li className="text-white font-bold text-xl">
          <a href="/">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
