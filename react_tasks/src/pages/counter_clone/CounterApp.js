import { useState } from "react";

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
    <div className="card_counter">
      <h2>Counter App</h2>
      <button className="counter" onClick={handleDecrement}>
        -
      </button>
      <input
        className="counter_input"
        type="number"
        value={number}
        onChange={handleNumberInput}
      />
      <button className="counter" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default CounterApp;
