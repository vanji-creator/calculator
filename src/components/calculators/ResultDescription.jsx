"use client";
import { useEffect, useState } from "react";

// This is a placeholder for your AI call.
// Replace the fetch with your actual AI API call.
export default function ResultDescription({ calculator, input, output }) {
  const [description, setDescription] = useState("Loading...");

  useEffect(() => {
    // Simulate async AI call
    setDescription("Generating description...");
    // Replace this with your actual API call
    setTimeout(() => {
      setDescription(
        `This is a placeholder description for the ${calculator} calculator. Input: ${JSON.stringify(
          input
        )}, Output: ${JSON.stringify(output)}.`
      );
    }, 1000);
  }, [calculator, input, output]);

  return <div className="mt-2 text-gray-700">{description}</div>;
}
