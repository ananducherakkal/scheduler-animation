import React from "react";

function HomeTopLeftSection() {
  return (
    <div className="h-1/3 min-h-[400px] w-1/5 max-w-[200px] relative">
      <div className="bg-[#7BA8FF] w-11 h-11 rounded-full absolute top-0 left-0"></div>
      <div className="bg-[#00FFB2] w-11 h-11 rounded-full absolute top-16 right-0"></div>
      <div className="bg-[#E98D8D] w-9 h-9 rounded-full absolute top-20 left-1"></div>
      <div className="bg-[#FFD600] w-14 h-14 rounded-full absolute top-36 left-9"></div>
      <div className="bg-[#55E3EF] w-9 h-9 rounded-full absolute top-52 right-4"></div>
      <div className="bg-[#EBCBD5] w-11 h-11 rounded-full absolute top-72 left-4"></div>
    </div>
  );
}

export default HomeTopLeftSection;
