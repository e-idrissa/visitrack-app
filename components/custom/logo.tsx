import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image src="/logo.png" alt="logo" width={50} height={50} />
      <span className="font-bold text-white text-xl">VisiTrack</span>
    </div>
  );
};

export default Logo;
