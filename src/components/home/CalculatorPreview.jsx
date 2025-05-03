export default function CalculatorPreview({ calculatorId }) {
  return (
    <section className="flex-1 p-8">
      <h2 className="text-2xl font-semibold text-black mb-4">
        {calculatorId.replace(/^\w/, (c) => c.toUpperCase())} Calculator
      </h2>
      <div className="bg-gray-100 rounded-lg p-6 h-64 flex items-center justify-center">
        <p className="text-gray-600">Preview coming soon</p>
      </div>
    </section>
  );
}
