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
      <p>There are {count + 1} counters currently active</p>
      <button className="clone" onClick={handleClick}>
        Add New
      </button>
      <br />
      {arr.map((item) => {
        return <CounterApp />;
      })}
    </div>
  );
};

export default CloneCounter;
