import { useState } from "react";
import { Card } from "antd";

const CounterApp = () => {
  const [number, setNumber] = useState(0);

  const handleNumberInput = (event) => {
    setNumber(event.target.value);
  };

  const handleDecrement = () => {
    setNumber(+number - 1);
  };

  const handleIncrement = () => {
    setNumber(+number + 1);
  };

  return (
    <div data-testid="counter-app">
      <Card title="Counter App" className="card_counter" hoverable>
        <button className="counter" onClick={handleDecrement}>
          -
        </button>
        <input
          data-testid="counter-input"
          className="counter_input"
          type="number"
          value={number}
          onChange={handleNumberInput}
        />
        <button className="counter" onClick={handleIncrement}>
          +
        </button>
      </Card>
    </div>
  );
};

export default CounterApp;
