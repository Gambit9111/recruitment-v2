import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useState } from "react";

type Props = {
  image: StaticImageData;
  headline: String;
  pharagraph: String;
};

function SuccessCard({ image, headline, pharagraph }: Props) {
  const [showText, setShowText] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <div 
        onClick={handleImageClick} 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex flex-col cursor-pointer"
      >
        <div
          className={`absolute inset-0 rounded-lg bg-black transition-opacity duration-500 ${
            showText ? "opacity-90" : isHovered ? "opacity-50" : "opacity-0"
          }`}
        />
        <Image
          src={image}
          alt="success11"
          quality={100}
          className="rounded-xl object-cover"
        />
        {isHovered && !showText && (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-white font-bold">Click to Read Story</p>
          </div>
        )}
        {showText && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-sm text-center tracking-normal">
            <h3 className="text-white">{headline}</h3>
            <p className="text-white">{pharagraph}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SuccessCard;