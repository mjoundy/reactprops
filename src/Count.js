import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center">
    <button className="bg-green-400 w-[50px]" onClick={() => setCount(count + 1)}>+</button>
      <p className="text-3xl">{count}</p>
      <button className="bg-green-400 w-[50px]" onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Count;

