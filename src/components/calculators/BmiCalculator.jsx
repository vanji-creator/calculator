"use client";

import { useState } from "react";
import ResultDescription from "./ResultDescription";

export default function BmiCalculator() {
  const [values, setValues] = useState({ weight: "", height: "" });
  const [result, setResult] = useState(null);

  const handleInputChange = (id, value) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const weight = parseFloat(values.weight);
    const heightCm = parseFloat(values.height);
    if (!weight || !heightCm) return setResult(null);

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    setResult({
      value: bmi.toFixed(2),
      category,
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label
          htmlFor="weight"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Weight (kg)
        </label>
        <input
          id="weight"
          type="number"
          min="0"
          className="border border-gray-300 rounded-md px-3 py-2"
          onChange={(e) => handleInputChange("weight", e.target.value)}
          value={values.weight}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="height"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Height (cm)
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
        Calculate BMI
      </button>

      {result && (
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <p className="text-lg font-medium text-blue-900">
            BMI: {result.value} - {result.category}
          </p>
          <div className="mt-4 h-32 bg-gray-200 flex items-center justify-center rounded">
            <span className="text-gray-500">[BMI Chart Here]</span>
          </div>
          <ResultDescription calculator="BMI" input={values} output={result} />
        </div>
      )}
    </form>
  );
}
