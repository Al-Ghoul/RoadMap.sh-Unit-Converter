"use client";
import React, { useState } from "react";

function LengthConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("km");
  const [result, setResult] = useState("");

  // Length conversion function
  const convertLength = (
    value: number,
    fromUnit: keyof typeof conversionFactors,
    toUnit: keyof typeof conversionFactors,
  ) => {
    const conversionFactors: Record<string, number> = {
      km: 1000,
      m: 1,
      cm: 0.01,
      mm: 0.001,
      mi: 1609.34,
      in: 0.0254,
      ft: 0.3048,
      yd: 0.9144,
    };
    if (!conversionFactors[fromUnit] || !conversionFactors[toUnit]) {
      return "Invalid unit conversion";
    }

    // Convert the value to meters (base unit)
    const valueInMeters = value * conversionFactors[fromUnit];

    // Convert from meters to the target unit
    return valueInMeters / conversionFactors[toUnit];
  };

  // Handler to perform conversion
  const handleConvert = () => {
    if (value === "") {
      alert("Please enter a value to convert");
      return;
    }
    const resultValue = convertLength(parseFloat(value), fromUnit, toUnit);
    setResult(`Result: ${resultValue}`);
  };

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-3xl mx-3 text-center">Length Converter</h1>

      {/* Input for length value */}
      <label htmlFor="lengthValue">Value:</label>
      <input
        type="number"
        id="lengthValue"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
        className="text-black placeholder:text-black"
      />

      {/* Dropdown for "Convert From" */}
      <label htmlFor="fromUnit">Convert From:</label>
      <select
        id="fromUnit"
        value={fromUnit}
        onChange={(e) =>
          setFromUnit(e.target.value)
        }
        className="text-black"
      >
        <option value="km">Kilometers (km)</option>
        <option value="m">Meters (m)</option>
        <option value="cm">Centimeters (cm)</option>
        <option value="mm">Millimeters (mm)</option>
        <option value="mi">Miles (mi)</option>
        <option value="in">Inches (in)</option>
        <option value="ft">Feet (ft)</option>
        <option value="yd">Yards (yd)</option>
      </select>

      {/* Dropdown for "Convert To" */}
      <label htmlFor="toUnit">Convert To:</label>
      <select
        id="toUnit"
        value={toUnit}
        onChange={(e) =>
          setToUnit(e.target.value)
        }
        className="text-black"
      >
        <option value="km">Kilometers (km)</option>
        <option value="m">Meters (m)</option>
        <option value="cm">Centimeters (cm)</option>
        <option value="mm">Millimeters (mm)</option>
        <option value="mi">Miles (mi)</option>
        <option value="in">Inches (in)</option>
        <option value="ft">Feet (ft)</option>
        <option value="yd">Yards (yd)</option>
      </select>

      {/* Button to trigger conversion */}
      <button
        onClick={handleConvert}
        className="w-1/2 mx-auto mt-4 border-teal-50 border rounded"
      >
        Convert
      </button>

      {/* Result display */}
      <p>{result}</p>
    </div>
  );
}

export default LengthConverter;
