import { useState } from "react";
import { Button } from "antd";

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
      <p className="clone-counter">
        There are {count + 1} counters currently active
      </p>
      <Button
        type="primary"
        className="clone"
        size="large"
        onClick={handleClick}
      >
        Add New
      </Button>
      <div className="flex-div">
        {arr.map((item) => {
          return <CounterApp />;
        })}
      </div>
    </div>
  );
};

export default CloneCounter;
