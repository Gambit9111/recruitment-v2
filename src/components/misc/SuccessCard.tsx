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
      <div onClick={handleImageClick} className="relative flex flex-col">
        <div
          className={`absolute inset-0 rounded-lg bg-black transition-opacity ${
            showText ? "opacity-90" : "opacity-0"
          }`}
        />
        <Image
          src={image}
          alt="success11"
          quality={100}
          className="rounded-xl object-cover"
        />
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
