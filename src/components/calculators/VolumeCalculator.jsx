"use client";
import { useState } from "react";
import ResultDescription from "./ResultDescription";

export default function VolumeCalculator() {
  const [values, setValues] = useState({ length: "", width: "", height: "" });
  const [result, setResult] = useState(null);

  const handleInputChange = (id, value) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const length = parseFloat(values.length);
    const width = parseFloat(values.width);
    const height = parseFloat(values.height);
    if (!length || !width || !height) return setResult(null);

    const volume = length * width * height;

    setResult({
      value: volume.toFixed(2),
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label
          htmlFor="length"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Length
        </label>
        <input
          id="length"
          type="number"
          min="0"
          className="border border-gray-300 rounded-md px-3 py-2"
          onChange={(e) => handleInputChange("length", e.target.value)}
          value={values.length}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="width"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Width
        </label>
        <input
          id="width"
          type="number"
          min="0"
          className="border border-gray-300 rounded-md px-3 py-2"
          onChange={(e) => handleInputChange("width", e.target.value)}
          value={values.width}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="height"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Height
        </label>
        <input
          id="height"
          type="number"
          min="0"
          className="border border-gray-300 rounded-md px-3 py-2"
          onChange={(e) => handleInputChange("height", e.target.value)}
          value={values.height}
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Calculate Volume
      </button>

      {result && (
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <p className="text-lg font-medium text-blue-900">
            Volume: {result.value} cubic units
          </p>
          <div className="mt-4 h-32 bg-gray-200 flex items-center justify-center rounded">
            <span className="text-gray-500">[Volume Chart Here]</span>
          </div>
          <ResultDescription
            calculator="Volume"
            input={values}
            output={result}
          />
        </div>
      )}
    </form>
  );
}
