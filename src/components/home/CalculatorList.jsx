"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const calculators = [
  { id: "bmi", name: "BMI Calculator" },
  { id: "mortgage", name: "Mortgage Calculator" },
  { id: "percentage", name: "Percentage Calculator" },
  { id: "area", name: "Area Calculator" },
  { id: "volume", name: "Volume Calculator" },
];

export default function CalculatorList({ onSelect }) {
  const [selected, setSelected] = useState(calculators[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector("section");
      if (window.scrollY > hero.offsetHeight) {
        document
          .getElementById("calculator-list")
          .classList.add("fixed", "top-0", "left-0", "h-screen");
      } else {
        document
          .getElementById("calculator-list")
          .classList.remove("fixed", "top-0", "left-0", "h-screen");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSelect = (id) => {
    setSelected(id);
    onSelect(id);
  };

  return (
    <aside id="calculator-list" className="w-64 p-6">
      <ul className="space-y-0-">
        {calculators.map((calc) => (
          <li
            key={calc.id}
            className={`text-lg font-medium cursor-pointer transition-colors p-2 rounded-md ${
              selected === calc.id
                ? "bg-gray-200 text-black font-bold"
                : "text-gray-600 hover:text-black"
            }`}
            onClick={() => handleSelect(calc.id)}
          >
            <Link href={`#${calc.id}`}>{calc.name}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
