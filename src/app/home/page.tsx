import React from "react";
import background from "../../../public/main-photo.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <Image src={background} alt=""></Image>
    </div>
  );
};

export default page;
