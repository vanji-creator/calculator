"use client";

import { useState } from "react";
import Hero from "@/components/home/Hero";
import CalculatorList from "@/components/home/CalculatorList";
import CalculatorPreview from "@/components/home/CalculatorPreview";

export default function Home() {
  const [selectedCalculator, setSelectedCalculator] = useState("bmi");

  return (
    <div className="min-h-screen">
      <Hero />
      <div className="flex">
        <CalculatorList onSelect={setSelectedCalculator} />
        <CalculatorPreview calculatorId={selectedCalculator} />
      </div>
    </div>
  );
}
