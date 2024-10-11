"use client";
import React, { useState } from "react";

function TemperatureConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("c");
  const [toUnit, setToUnit] = useState("f");
  const [result, setResult] = useState("");

  // Temperature conversion function
  const convertTemperature = (
    value: number,
    fromUnit: string,
    toUnit: string,
  ) => {
    if (fromUnit === "c" && toUnit === "f") {
      return (value * 9) / 5 + 32;
    } else if (fromUnit === "f" && toUnit === "c") {
      return ((value - 32) * 5) / 9;
    } else if (fromUnit === "c" && toUnit === "k") {
      return value + 273.15;
    } else if (fromUnit === "f" && toUnit === "k") {
      return ((value - 32) * 5) / 9 + 273.15;
    } else if (fromUnit === "k" && toUnit === "c") {
      return value - 273.15;
    } else if (fromUnit === "k" && toUnit === "f") {
      return ((value - 273.15) * 9) / 5 + 32;
    } else {
      return "Invalid unit conversion";
    }
  };

  // Handler to perform conversion
  const handleConvert = () => {
    if (value === "") {
      alert("Please enter a value to convert");
      return;
    }

    const resultValue = convertTemperature(parseFloat(value), fromUnit, toUnit);
    setResult(`Result: ${resultValue}`);
  };

  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-3xl mx-3 text-center">Temperature Converter</h2>

      <label htmlFor="temperatureValue">Value:</label>
      <input
        type="number"
        id="temperatureValue"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
        className="text-black placeholder:text-black"
      />

      <label htmlFor="fromUnit">Convert From:</label>
      <select
        id="fromUnit"
        value={fromUnit}
        onChange={(e) => setFromUnit(e.target.value)}
        className="text-black"
      >
        <option value="c">Celsius (C)</option>
        <option value="f">Fahrenheit (F)</option>
        <option value="k">Kelvin (K)</option>
      </select>

      <label htmlFor="toUnit">Convert To:</label>
      <select
        id="toUnit"
        value={toUnit}
        onChange={(e) => setToUnit(e.target.value)}
        className="text-black"
      >
        <option value="c">Celsius (C)</option>
        <option value="f">Fahrenheit (F)</option>
        <option value="k">Kelvin (K)</option>
      </select>

      <button onClick={handleConvert}>Convert</button>

      <p>{result}</p>
    </div>
  );
}

export default TemperatureConverter;
