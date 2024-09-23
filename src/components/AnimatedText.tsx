"use client";
import React, { useEffect, useRef } from "react";

const AnimatedText: React.FC = () => {
  const text = "";
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Delay the appearance of text until the div has expanded
            setTimeout(() => {
              textRef.current.forEach((span, index) => {
                if (span) {
                  span.style.animationDelay = `${index * 0.1}s`;
                  span.classList.remove("hidden");
                  span.classList.add("animate-charAppear");
                }
              });
            }, 1000); // Delay to match the duration of expandHeightAndSlideUp
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1.0 } // Trigger when the element is fully in view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-end bg-gray-900 z-0">
      <div
        ref={containerRef}
        className="w-10/12 bg-blue-500 animate-expandHeightAndSlideUp overflow-hidden z-10"
      >
        <div className="flex justify-center w-full h-full">
          {text.split("").map((char, index) => (
            <span
              ref={(el) => (textRef.current[index] = el)}
              key={index}
              className="text-white text-9xl font-bold hidden h-full"
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedText;
