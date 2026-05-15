import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function TyperWriter() {
  const texts = [
    "برنامه نویس React",
    "توسعه‌ دهنده فرانت‌اند",
    "برنامه نویس open source",
  ];

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-200">
        <TypeAnimation
          sequence={texts}
          speed={200}
          style={{ fontSize: "26px", display: "inline-block" }}
          repeat={Infinity}
          cursor={true}
          cursorChar="|"
          wrapper="span"
        />
      </h1>
    </div>
  );
}
