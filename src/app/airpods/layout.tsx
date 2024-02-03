import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Aripords pro",
};

interface AripodsLayout {
  children: React.ReactNode;
}

function AirpodsLayout(props: AripodsLayout) {
  const { children } = props;

  return (
    <div className="w-full min-h-screen bg-gray-90 flex flex-col items-center">
      <div className="w-full max-w-5xl h-16 border-b border-gray-70 text-gray-30 flex items-center px-5 fixed top-0 left-1/2 -translate-x-1/2">
        <div className="text-md font-medium">Airpods pro</div>
        <button className="ml-auto text-sm bg-blue-600 px-4 py-1 rounded-full">
          Buy now
        </button>
      </div>
      {children}
    </div>
  );
}

export default AirpodsLayout;
