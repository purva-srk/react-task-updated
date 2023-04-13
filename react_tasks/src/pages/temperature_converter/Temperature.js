import { useState } from "react";

const Temperature = () => {
  const [temp, setTemp] = useState({ c: "", f: "" });
  const [selectValue1, setSelectValue1] = useState("Celsius");
  const [selectValue2, setSelectValue2] = useState("Fahrenheit");

  const handleCelsius = (event) => {
    setTemp({
      c: event.target.value,
      f: (event.target.value * 9) / 5 + 32,
    });
  };

  const handleFahrenheit = (event) => {
    setTemp({
      c: ((event.target.value - 32) * 5) / 9,
      f: event.target.value,
    });
  };

  const handleSelectChange1 = (event) => {
    setSelectValue1(event.target.value);
    if (event.target.value == "Fahrenheit") {
      setSelectValue2("Celsius");
    } else {
      setSelectValue2("Fahrenheit");
    }
  };

  const handleSelectChange2 = (event) => {
    setSelectValue2(event.target.value);
    if (event.target.value == "Celsius") {
      setSelectValue1("Fahrenheit");
    } else {
      setSelectValue1("Celsius");
    }
    console.log("hi");
  };

  return (
    <div className="card">
      <h2>Temperature Converter</h2>
      <div>
        {selectValue1 === "Celsius" ? (
          <input
            className="temperature"
            type="number"
            value={temp.c}
            onChange={handleCelsius}
          />
        ) : (
          <input
            className="temperature"
            type="number"
            value={temp.f}
            onChange={handleFahrenheit}
          />
        )}

        <select value={selectValue1} onChange={handleSelectChange1}>
          <option disabled value="select">
            -- select an option --
          </option>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>

        {"="}

        {selectValue2 === "Fahrenheit" ? (
          <input
            className="temperature"
            type="number"
            value={temp.f}
            onChange={handleFahrenheit}
          />
        ) : (
          <input
            className="temperature"
            type="number"
            value={temp.c}
            onChange={handleCelsius}
          />
        )}

        <select value={selectValue2} onChange={handleSelectChange2}>
          <option disabled value="select">
            -- select an option --
          </option>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </div>
    </div>
  );
};

export default Temperature;
