"use client";
import React, { useState } from "react";

function WeightConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("kg");
  const [toUnit, setToUnit] = useState("g");
  const [result, setResult] = useState("");

  // Weight conversion function
  const convertWeight = (value: number, fromUnit: string, toUnit: string) => {
    const conversionFactors: Record<string, { [key: string]: number }> = {
      kg: { g: 1000, mg: 1000000, lb: 2.20462, oz: 35.274, t: 0.001 },
      g: { kg: 0.001, mg: 1000, lb: 0.00220462, oz: 0.035274, t: 0.000001 },
      mg: {
        kg: 0.000001,
        g: 0.001,
        lb: 0.00000220462,
        oz: 0.000035274,
        t: 0.000000001,
      },
      lb: { kg: 0.453592, g: 453.592, mg: 453592, oz: 16, t: 0.000453592 },
      oz: {
        kg: 0.0283495,
        g: 28.3495,
        mg: 28349.5,
        lb: 0.0625,
        t: 0.0000283495,
      },
      t: { kg: 1000, g: 1000000, mg: 1000000000, lb: 2204.62, oz: 35274 },
    };

    if (!conversionFactors[fromUnit] || !conversionFactors[fromUnit][toUnit]) {
      return "Invalid unit conversion";
    }

    return value * conversionFactors[fromUnit][toUnit];
  };

  // Handler to perform conversion
  const handleConvert = () => {
    if (value === "") {
      alert("Please enter a value to convert");
      return;
    }

    const resultValue = convertWeight(parseFloat(value), fromUnit, toUnit);
    setResult(`Result: ${resultValue}`);
  };

  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-3xl mx-3 text-center">Weight Converter</h2>

      <label htmlFor="weightValue">Value:</label>
      <input
        type="number"
        id="weightValue"
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
        <option value="kg">Kilograms (kg)</option>
        <option value="g">Grams (g)</option>
        <option value="mg">Milligrams (mg)</option>
        <option value="lb">Pounds (lb)</option>
        <option value="oz">Ounces (oz)</option>
        <option value="t">Tonnes (t)</option>
      </select>

      <label htmlFor="toUnit">Convert To:</label>
      <select
        id="toUnit"
        value={toUnit}
        onChange={(e) => setToUnit(e.target.value)}
        className="text-black"
      >
        <option value="kg">Kilograms (kg)</option>
        <option value="g">Grams (g)</option>
        <option value="mg">Milligrams (mg)</option>
        <option value="lb">Pounds (lb)</option>
        <option value="oz">Ounces (oz)</option>
        <option value="t">Tonnes (t)</option>
      </select>

      <button
        onClick={handleConvert}
        className="w-1/2 mx-auto mt-4 border-teal-50 border rounded"
      >
        Convert
      </button>

      <p>{result}</p>
    </div>
  );
}

export default WeightConverter;
