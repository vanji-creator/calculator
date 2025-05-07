"use client";

import { useState } from "react";
import ResultDescription from "./ResultDescription";

export default function MortgageCalculator() {
  const [values, setValues] = useState({
    loanAmount: "",
    interestRate: "",
    loanTerm: "",
  });
  const [result, setResult] = useState(null);

  const handleInputChange = (id, value) => {
    setValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loanAmount = parseFloat(values.loanAmount);
    const interestRate = parseFloat(values.interestRate);
    const loanTerm = parseFloat(values.loanTerm);
    if (!loanAmount || !interestRate || !loanTerm) return setResult(null);

    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setResult({
      value: monthlyPayment.toFixed(2),
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label
          htmlFor="loanAmount"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Loan Amount ($)
        </label>
        <input
          id="loanAmount"
          type="number"
          min="0"
          className="border border-gray-300 rounded-md px-3 py-2"
          onChange={(e) => handleInputChange("loanAmount", e.target.value)}
          value={values.loanAmount}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="interestRate"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Interest Rate (%)
        </label>
        <input
          id="interestRate"
          type="number"
          min="0"
          step="0.01"
          className="border border-gray-300 rounded-md px-3 py-2"
          onChange={(e) => handleInputChange("interestRate", e.target.value)}
          value={values.interestRate}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="loanTerm"
          className="text-sm font-medium text-gray-700 mb-1"
        >
          Loan Term (years)
        </label>
        <input
          id="loanTerm"
          type="number"
          min="1"
          className="border border-gray-300 rounded-md px-3 py-2"
          onChange={(e) => handleInputChange("loanTerm", e.target.value)}
          value={values.loanTerm}
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Calculate Mortgage
      </button>

      {result && (
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <p className="text-lg font-medium text-blue-900">
            Monthly Payment: ${result.value}
          </p>
          <div className="mt-4 h-32 bg-gray-200 flex items-center justify-center rounded">
            <span className="text-gray-500">[Mortgage Chart Here]</span>
          </div>
          <ResultDescription
            calculator="Mortgage"
            input={values}
            output={result}
          />
        </div>
      )}
    </form>
  );
}
