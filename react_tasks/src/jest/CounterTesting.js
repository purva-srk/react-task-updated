import { Button } from "antd";

import { useState } from "react";

const CounterTesting = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const restart = () => {
    setCount(0);
  };

  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };

  return (
    <div className="counter-tester">
      <h1>
        Count:<h3 data-testid="count">{count}</h3>
      </h1>
      <div className="counter-tester-buttons">
        <Button type="primary" onClick={increment}>
          Increment
        </Button>
        <Button type="primary" onClick={decrement}>
          Decrement
        </Button>
        <Button type="primary" onClick={restart}>
          Restart
        </Button>
        <Button type="primary" onClick={switchSigns}>
          Switch Signs
        </Button>
      </div>
    </div>
  );
};

export default CounterTesting;
