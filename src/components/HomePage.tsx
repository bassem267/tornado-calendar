"use client";
import { useState } from "react";
import Image from "next/image";

interface Props {
  image1Src: string;
  image2Src: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  buttonText: string;
  buttonBackgroundColor: string;
}

const HomePage: React.FC<Props> = ({
  image1Src,
  image2Src,
  title1,
  title2,
  description1,
  description2,
  buttonText,
  buttonBackgroundColor,
}) => {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleImageClick = () => {
    setIsSwapped(!isSwapped);
  };

  return (
    <>
      <div className="relative h-screen bg-gray-800">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/wallpaper.jpg"
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
              {/* First Text */}
              <div
                className={`absolute top-1/2 transition-all duration-700 ease-in-out ${
                  isSwapped
                    ? "-translate-x-[100%] opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                <div className="flex flex-col justify-center h-full px-10">
                  <h1 className="text-4xl font-bold">{title1}</h1>
                  <p className="mt-4 text-lg">{description1}</p>
                  <button
                    onClick={handleImageClick}
                    className={`w-36 mt-8 px-6 py-4 ${buttonBackgroundColor} text-gray-800 rounded-md hover:bg-gray-200`}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>

              {/* Second Text (swaps in) */}
              <div
                className={`absolute top-1/2 transition-all duration-700 ease-in-out ${
                  isSwapped
                    ? "translate-x-0 opacity-100"
                    : "translate-x-[100%] opacity-0"
                }`}
              >
                <div className="flex flex-col justify-center h-full px-10">
                  <h1 className="text-4xl font-bold">{title2}</h1>
                  <p className="mt-4 text-lg">{description2}</p>
                  <button
                    onClick={handleImageClick}
                    className={`w-36 mt-8 px-6 py-4 ${buttonBackgroundColor} text-gray-800 rounded-md hover:bg-gray-200`}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            </div>

            {/* Container for the images */}
            <div className="h-full w-7/12 flex items-end pb-20 relative">
              {/* Image 1 */}
              <div
                className={`absolute transition-all duration-700 ease-in-out ${
                  isSwapped
                    ? "-translate-x-[100%] opacity-0"
                    : "translate-x-0 opacity-100"
                } z-10`}
              >
                <div className="h-[500px] w-[400px] border-8 border-white rounded-3xl">
                  <Image
                    src={image1Src}
                    alt="Image 1"
                    height={400}
                    width={300}
                    objectFit="cover"
                    className="h-full w-full object-cover rounded-3xl"
                  />
                </div>
              </div>

              {/* Image 2 with onClick animation */}
              <div
                onClick={handleImageClick}
                className={`absolute transition-all duration-700 ease-in-out cursor-pointer z-20 ${
                  isSwapped
                    ? "translate-x-0 w-[400px] h-[500px]"
                    : "translate-x-[450px] w-[320px] h-[420px]"
                }`}
              >
                <div className="h-full w-full rounded-3xl transition-all duration-700 ease-in-out">
                  <Image
                    src={image2Src}
                    alt="Image 2"
                    height={400}
                    width={300}
                    objectFit="cover"
                    className={`h-full w-full object-cover rounded-3xl transition-all duration-700 ease-in-out ${
                      isSwapped ? "border-8 border-white" : "border-0"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
