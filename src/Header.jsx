import React from "react";
import icone from "./assets/icone.jpg";

const Header = () => {
  return (
    <header className='flex justify-between items-center p-[20px] bg-red-300'>
      <img src={icone} alt="icone" className="w-[70px]" />
      <ul className="flex gap-[50px] text-xl">
        <li className="hover:text-zinc-600">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-zinc-600">
          <a href="/">About</a>
        </li>
        <li className="hover:text-zinc-600">
          <a href="/">Services</a>
        </li>
        <li className="hover:text-zinc-600">
          <a href="/">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
