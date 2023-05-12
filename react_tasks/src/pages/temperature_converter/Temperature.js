import { useState } from "react";
import { Card } from "antd";

const Temperature = () => {
  const [temp, setTemp] = useState({ c: "", f: "" });
  const [selectValue1, setSelectValue1] = useState("Celsius");
  const [selectValue2, setSelectValue2] = useState("Fahrenheit");

  const handleInputField1 = (event) => {
    if (selectValue1 === "Fahrenheit") {
      setTemp({
        c: ((event.target.value - 32) * 5) / 9,
        f: event.target.value,
      });
    } else {
      setTemp({
        c: event.target.value,
        f: (event.target.value * 9) / 5 + 32,
      });
    }
  };

  const handleInputField2 = (event) => {
    if (selectValue1 === "Celsius") {
      setTemp({
        c: event.target.value,
        f: (event.target.value * 9) / 5 + 32,
      });
    } else {
      setTemp({
        c: ((event.target.value - 32) * 5) / 9,
        f: event.target.value,
      });
    }
  };

  const handleSelectValue1 = (event) => {
    setSelectValue1(event.target.value);
    if (event.target.value === "Fahrenheit") {
      setSelectValue2("Celsius");
      setTemp({
        c: ((temp.c - 32) * 5) / 9,
        f: temp.c,
      });
    } else {
      setSelectValue2("Fahrenheit");
      setTemp({
        c: temp.f,
        f: (temp.f * 9) / 5 + 32,
      });
    }
  };

  const handleSelectValue2 = (event) => {
    setSelectValue2(event.target.value);
    if (event.target.value === "Celsius") {
      setSelectValue1("Fahrenheit");
      setTemp({
        c: temp.f,
        f: (temp.f * 9) / 5 + 32,
      });
    } else {
      setSelectValue1("Celsius");
      setTemp({
        c: ((temp.c - 32) * 5) / 9,
        f: temp.c,
      });
    }
  };

  return (
    <Card title="Temperature Converter" className="card_temperature" hoverable>
      <div>
        {selectValue1 === "Celsius" ? (
          <input
            className="temperature"
            type="text"
            value={temp.c}
            onChange={handleInputField1}
          ></input>
        ) : (
          <input
            className="temperature"
            type="text"
            value={temp.f}
            onChange={handleInputField1}
          ></input>
        )}

        <select value={selectValue1} onChange={handleSelectValue1}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>

        {"="}

        {selectValue2 === "Fahrenheit" ? (
          <input
            className="temperature"
            type="text"
            value={temp.f}
            onChange={handleInputField2}
          ></input>
        ) : (
          <input
            className="temperature"
            type="text"
            value={temp.c}
            onChange={handleInputField2}
          ></input>
        )}

        <select value={selectValue2} onChange={handleSelectValue2}>
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>
      </div>
    </Card>
  );
};

export default Temperature;
