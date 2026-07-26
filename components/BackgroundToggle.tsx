"use client";

import { Cat } from "lucide-react";
import { useState, useEffect } from "react";

export default function BackgroundToggle() {
  const [isDark, setIsDark] = useState(false);

  // Set initial background on mount
  useEffect(() => {
    document.body.style.backgroundImage = "url('/images/light-bg.jpg')";
    document.body.style.backgroundColor = "#ffffff";
  }, []);

  const toggleBackground = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.body.style.backgroundImage = newIsDark
      ? "url('/kitty.jpg')"
      : "url('/images/light-bg.jpg')";
    document.body.style.backgroundColor = newIsDark ? "#f4d7f4" : "#ffffff";
  };

  return (
    <button onClick={toggleBackground}>
      <Cat />
    </button>
  );
}
