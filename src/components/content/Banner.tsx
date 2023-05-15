import React from "react";
import Image from "next/image";

type BannerProps = {};

const Banner: React.FC<BannerProps> = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Fueling the future of work</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        auctor faucibus. Aenean sagittis arcu justo, nec iaculis massa
        consequat vitae. Vivamus et nulla ac nunc laoreet pharetra.
      </p>
      <Image
        src={"/images/bannerImage.webp"}
        width={2120}
        height={1188}
        alt="heroImage1"
      />
    </>
  );
};

export default Banner;
