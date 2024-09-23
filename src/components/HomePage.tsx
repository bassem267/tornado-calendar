"use client";
import { useState } from "react";
import Image from "next/image";

interface Slide {
  imageSrc: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonBackgroundColor?: string;
  backgroundImage: string;
}

interface Props {
  slides: Slide[];
}

const HomePage: React.FC<Props> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  const handleImageClick = () => {
    setOpacity(0); // Fade out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setOpacity(1); // Fade in
    }, 300);
  };

  return (
    <>
      <div className="relative h-screen bg-gray-800">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 transition-opacity duration-300"
          style={{ opacity }}
        >
          <Image
            src={slides[currentIndex].backgroundImage}
            alt="Background image"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent"></div>

        {/* Content */}
        <div className="relative z-20 flex h-full text-white w-full items-center justify-center">
          <div className="h-full container flex">
            <div className="h-full w-5/12 relative">
              {/* Slide Text */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute top-1/2 transition-all duration-700 ease-in-out ${
                    currentIndex === index
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-[100%] opacity-0"
                  }`}
                >
                  <div className="flex flex-col justify-center h-full px-10">
                    <h1 className="text-4xl font-bold">{slide.title}</h1>
                    <p className="mt-4 text-lg">{slide.description}</p>
                    <button
                      onClick={handleImageClick}
                      className={`w-36 mt-8 px-6 py-4 ${slide.buttonBackgroundColor} text-gray-800 rounded-md hover:bg-gray-200`}
                    >
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Container for the images */}
            <div className="h-full w-7/12 flex items-end pb-20 relative overflow-hidden">
              {/* Looping Images */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  onClick={handleImageClick}
                  className={`absolute transition-all duration-700 ease-in-out cursor-pointer ${
                    index === currentIndex
                      ? "translate-x-0 w-[400px] h-[500px] border-4 border-white rounded-3xl"
                      : index === (currentIndex + 1) % slides.length
                      ? "translate-x-[450px] w-[320px] h-[420px]"
                      : "translate-x-[800px] w-[320px] h-[420px]"
                  }`}
                >
                  <div className="h-full w-full rounded-3xl">
                    <Image
                      src={slide.imageSrc}
                      alt={`Image ${index + 1}`}
                      height={400}
                      width={300}
                      objectFit="cover"
                      className="h-full w-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
