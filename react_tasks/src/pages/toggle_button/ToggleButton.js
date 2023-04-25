import { useState } from "react";

const ToggleButton = () => {
  const [data, setData] = useState();
  const [button, setButton] = useState(true);

  const nameChangeHandler = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      <label className="toggleLabel">Enter Name:</label>
      <input
        className="toggleInput"
        type="text"
        value={data}
        onChange={nameChangeHandler}
      />

      {/* <button
        className="toggleButton"
        disabled={!data}
        onClick={handleShowButton}
      >
        Show
      </button>
      <button
        className="toggleButton"
        disabled={!data}
        onClick={handleHideButton}
      >
        Hide
      </button> */}

      {button === true && <p>{data}</p>}
      {button === false && null}
      <br />

      <button
        className="toggleButton"
        onClick={() => {
          setButton(true);
        }}
        disabled={!data}
      >
        Show
      </button>
      <button
        className="toggleButton"
        onClick={() => {
          setButton(false);
        }}
        disabled={!data}
      >
        Hide
      </button>
    </div>
  );
};

export default ToggleButton;
