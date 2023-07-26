import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement } from "./CounterAction";

const ReduxCounter = () => {
  const counterDispatch = useDispatch();
  const counter = useSelector((state) => state);
  return (
    <div className="redux_counter">
      <h1>Counter Application</h1>
      <div>
        <Button type="primary" onClick={() => counterDispatch(Decrement())}>
          Decrement
        </Button>

        <div>
          <br />
          {counter}
        </div>
        <br />
        <Button type="primary" onClick={() => counterDispatch(Increment())}>
          Increment
        </Button>
      </div>
    </div>
  );
};

export default ReduxCounter;
