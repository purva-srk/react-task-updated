import { useState } from "react";

const ToggleButton = () => {
  const [data, setData] = useState();
  const [showButton, setShowButton] = useState("true");

  const nameChangeHandler = (event) => {
    setData(event.target.value);
  };

  const handleShowButton = () => {
    setShowButton("true");
  };

  const handleHideButton = () => {
    setShowButton("false");
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
      {showButton === "true" && <p>{data}</p>}
      {showButton === "false" && null}
      <br />

      <button
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
      </button>
    </div>
  );
};

export default ToggleButton;
