"use client";

import { getCalculator } from "../calculators/calculatorRegistry";

export default function CalculatorPreview({ calculatorId }) {
  const calculator = getCalculator(calculatorId);

  if (!calculator) {
    return (
      <section className="flex-1 p-8">
        <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
          <p className="text-gray-600">Calculator not found</p>
        </div>
      </section>
    );
  }

  const CalculatorComponent = calculator.component;

  return (
    <section className="flex-1 p-8">
      <h2 className="text-2xl font-semibold text-black mb-4">
        {calculator.title}
      </h2>
      <p className="text-gray-600 mb-6">{calculator.description}</p>
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <CalculatorComponent />
      </div>
    </section>
  );
}
