import Image from "next/image";
import React from "react";

function AirpodsMidSection() {
  return (
    <div className="relative">
      <div className="w-full h-screen sticky top-0 left-0 p-12 pt-20 flex flex-col items-center">
        <div className="w-full h-fit max-w-xl flex py-10 justify-between space-x-2">
          <div className="h-[60%] flex items-center">
            <div className="h-[75%]">
              <Image
                src="/images/airpods-ear-part-4.png"
                alt="airpods"
                width="76"
                height="120"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <div className="h-[60%] flex items-center">
            <div className="h-[80%]">
              <Image
                src="/images/airpods-ear-part-3.png"
                alt="airpods"
                width="88"
                height="126"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <div className="h-[60%] flex items-center">
            <div className="h-[85%]">
              <Image
                src="/images/airpods-ear-part-2.png"
                alt="airpods"
                width="87"
                height="137"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <div className="h-[60%] flex items-center">
            <div className="h-[90%]">
              <Image
                src="/images/airpods-ear-part-1.png"
                alt="airpods"
                width="88"
                height="160"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <div className="h-full w-auto  max-w-[135px]">
            <Image
              src="/images/airpods-main-part.png"
              alt="airpods"
              width="195"
              height="318"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-screen">scroll 1</div>
      <div className="w-full h-screen">scroll 2</div>
      <div className="w-full h-screen">scroll 3</div>
      <div className="w-full h-screen">scroll 4</div>
    </div>
  );
}

export default AirpodsMidSection;
