import BmiCalculator from "./BmiCalculator";
import MortgageCalculator from "./MortgageCalculator";
import PercentageCalculator from "./PercentageCalculator";
import AreaCalculator from "./AreaCalculator";
import VolumeCalculator from "./VolumeCalculator";
// Import other calculators as needed

export const calculators = {
  bmi: {
    component: BmiCalculator,
    title: "BMI Calculator",
    description: "Calculate your Body Mass Index",
  },
  mortgage: {
    component: MortgageCalculator,
    title: "Mortgage Calculator",
    description: "Calculate your monthly mortgage payments",
  },
  // Add other calculators here
  percentage: {
    component: PercentageCalculator,
    title: "Percentage Calculator",
    description: "Calculate percentages of a value",
  },
  area: {
    component: AreaCalculator,
    title: "Area Calculator",
    description: "Calculate the area of a rectangle",
  },
  volume: {
    component: VolumeCalculator,
    title: "Volume Calculator",
    description: "Calculate the volume of a rectangular prism",
  },
};
export function getCalculator(calculatorId) {
  return calculators[calculatorId] || null;
}
