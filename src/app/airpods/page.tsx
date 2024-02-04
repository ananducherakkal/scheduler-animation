"use client";
import AirpodsMidSection from "@/components/airpods/airpodsMidSection";
import AirpodsTopSection from "@/components/airpods/airpodsTopSection";
import { useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function AirpodsPage() {
  return (
    <div className="w-full flex flex-col relative">
      <AirpodsTopSection />
      <AirpodsMidSection />
    </div>
  );
}

export default AirpodsPage;
