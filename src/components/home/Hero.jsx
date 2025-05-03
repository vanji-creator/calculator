"use client";

import { useEffect, useState } from "react";

const translations = {
  en: "calculate",
  es: "calcular",
  ar: "حساب",
  hi: "गणना",
  ta: "கணக்கிடு",
  ml: "കണക്കാക്കുക",
};

export default function Hero() {
  const [currentLang, setCurrentLang] = useState("en");
  const [loadAnimation, setLoadAnimation] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!loadAnimation || isAnimating) return; // Don't start if already animating

    setIsAnimating(true);
    const languages = ["en", "es", "ar", "hi", "ta", "ml", "en"];
    let index = 0;

    const interval = setInterval(() => {
      index++;
      if (index < languages.length) {
        setCurrentLang(languages[index]);
      } else {
        clearInterval(interval);
        setCurrentLang("en");
        setIsAnimating(false);
        setLoadAnimation(false);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      setIsAnimating(false);
    };
  }, [loadAnimation]);

  const handleMouseEnter = () => {
    if (!isAnimating) {
      setLoadAnimation(true);
    }
  };

  return (
    <section className="h-[100vh] flex items-center justify-center">
      <h1
        className={`text-[10rem] font-extrabold text-black transition-transform duration-100 ${
          currentLang === "ar" ? "text-right" : "text-center"
        }`}
        onMouseEnter={handleMouseEnter}
      >
        {translations[currentLang]}
      </h1>
    </section>
  );
}
