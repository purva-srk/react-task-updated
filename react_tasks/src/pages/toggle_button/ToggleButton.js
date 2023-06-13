import { useState } from "react";
import { Button } from "antd";

const ToggleButton = () => {
  const [data, setData] = useState();
  const [button, setButton] = useState(true);

  const nameChangeHandler = (event) => {
    setData(event.target.value);
  };

  return (
    <div className="toggle">
      <label className="toggleLabel">Enter Name:</label>
      <input
        data-testid="input"
        className="toggleInput"
        type="text"
        value={data}
        onChange={nameChangeHandler}
      />
      <div className="data">
        {button === true && <p>{data}</p>}
        {button === false && null}
      </div>
      <br />

      <span>
        <Button
          type="primary"
          className="buttonShow"
          size="large"
          onClick={() => {
            setButton(true);
          }}
          disabled={!data}
        >
          Show
        </Button>
        <Button
          type="primary"
          className="buttonHide"
          size="large"
          onClick={() => {
            setButton(false);
          }}
          disabled={!data}
        >
          Hide
        </Button>
      </span>
    </div>
  );
};

export default ToggleButton;
