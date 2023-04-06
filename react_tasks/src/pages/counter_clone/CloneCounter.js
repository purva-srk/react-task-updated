import { useState } from "react";

import CounterApp from "./CounterApp";

const CloneCounter = () => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);

  const handleClick = (event) => {
    setCount(+count + 1);
    arr.push(count);
  };

  return (
    <div>
      <button className="clone" onClick={handleClick}>
        Add New
      </button>
      {arr.map((item) => {
        return <CounterApp />;
      })}
    </div>
  );
};

export default CloneCounter;
