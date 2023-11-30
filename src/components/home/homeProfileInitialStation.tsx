"use client";
import React from "react";
import { useScroll } from "framer-motion";
import HomeProfileButton from "./homeProfileButton";
import useTargetPosition from "@/hooks/useTargetPosition";

interface IHomeProfileInitialStationProps {
  targetRef: React.RefObject<HTMLDivElement>;
  containerRef: React.RefObject<HTMLDivElement>;
}

function HomeProfileInitialStation(props: IHomeProfileInitialStationProps) {
  const { targetRef, containerRef } = props;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"],
  });

  const targetPosition = useTargetPosition(targetRef, containerRef);

  return (
    <div className="h-0 w-0">
      <HomeProfileButton
        scrollYProgress={scrollYProgress}
        targetPosition={targetPosition}
        targetOrder={{ row: 0, column: 0 }}
        position={{ x: 19, y: 135, scale: 200 }}
      />
      <HomeProfileButton
        scrollYProgress={scrollYProgress}
        targetPosition={targetPosition}
        targetOrder={{ row: 0, column: 1 }}
        position={{ x: 159, y: 199, scale: 200 }}
      />
      <HomeProfileButton
        scrollYProgress={scrollYProgress}
        targetPosition={targetPosition}
        targetOrder={{ row: 1, column: 0 }}
        position={{ x: 25, y: 233, scale: 150 }}
      />
    </div>
  );
}

export default HomeProfileInitialStation;
