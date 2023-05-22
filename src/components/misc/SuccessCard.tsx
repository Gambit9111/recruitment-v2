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
      <div
        onClick={handleImageClick}
        className="relative flex cursor-pointer flex-col"
      >
        <Image
          src={image}
          alt="success11"
          quality={100}
          className="rounded-xl object-cover"
        />
        {/* Sticker div with SVG */}
        <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-br-xl rounded-tl-xl bg-color-yellow/20 p-1">
          <svg
            width="24"
            height="28"
            viewBox="0 0 24 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.056 26.896L14.2453 20.1333M14.2453 20.1333L10.8987 23.1L11.6573 10.4733L18.6267 21.0293L14.2453 20.1333ZM12 1V4M19.7787 4.22133L17.6573 6.34267M23 12H20M6.34267 17.6573L4.22267 19.7773M4 12H1M6.34267 6.34267L4.22267 4.22267"
              stroke="#FFD95A"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {showText && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black p-4 text-center text-sm tracking-normal opacity-90">
            <h3 className="text-white">{headline}</h3>
            <p className="text-white">{pharagraph}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SuccessCard;
