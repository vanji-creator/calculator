"use client";
import { useState } from "react";
import ResultDescription from "./ResultDescription";

export default function PercentageCalculator() {
  const [values, setValues] = useState({ value: "", percentage: "" });
  const [result, setResult] = useState(null);

  const handleInputChange = (id, value) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(values.value);
    const percentage = parseFloat(values.percentage);
    if (!value || !percentage) return setResult(null);

    const resultValue = (value * percentage) / 100;

    setResult({
      value: resultValue.toFixed(2),
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label
          htmlFor="value"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Value
        </label>
        <input
          id="value"
          type="number"
          className="border border-gray-300 rounded-md px-3 py-2"
          onChange={(e) => handleInputChange("value", e.target.value)}
          value={values.value}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="percentage"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Percentage (%)
        </label>
        <input
          id="percentage"
          type="number"
          min="0"
          max="100"
          className="border border-gray-300 rounded-md px-3 py-2"
          onChange={(e) => handleInputChange("percentage", e.target.value)}
          value={values.percentage}
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Calculate Percentage
      </button>

      {result && (
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <p className="text-lg font-medium text-blue-900">
            Result: {result.value}
          </p>
          <div className="mt-4 h-32 bg-gray-200 flex items-center justify-center rounded">
            <span className="text-gray-500">[Percentage Chart Here]</span>
          </div>
          <ResultDescription
            calculator="Percentage"
            input={values}
            output={result}
          />
        </div>
      )}
    </form>
  );
}
