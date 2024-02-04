"use strict";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useRef } from "react";

function AirpodsTopSection() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end 40%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={targetRef}
      className="w-full h-[150vh] min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 3,
      }}
    >
      <motion.div
        style={{ opacity }}
        className="flex w-full justify-center items-center text-gray-30 text-9xl font-bold sticky top-[40vh] mt-[40vh]"
      >
        Airpods Pro
      </motion.div>
    </motion.div>
  );
}

export default AirpodsTopSection;
