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

  const handleImageClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <div onClick={handleImageClick} className="relative flex flex-col cursor-pointer">
        <Image
          src={image}
          alt="success11"
          quality={100}
          className="rounded-xl object-cover"
        />
        {/* Sticker div with SVG */}
        <div className="absolute top-0 left-0 w-12 h-12 p-1 flex items-center justify-center bg-color-yellow/20 rounded-tl-xl rounded-br-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#FFD95A" strokeWidth="1" strokeOpacity="0.8">
            <path d="M12 6v12M6 12h12" />
          </svg>
        </div>
        {showText && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-sm text-center tracking-normal bg-black opacity-90">
            <h3 className="text-white">{headline}</h3>
            <p className="text-white">{pharagraph}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SuccessCard;