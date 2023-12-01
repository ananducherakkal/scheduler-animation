import { cn } from "@/utils/shadcn";
import React, { useEffect, useRef, useState } from "react";
import HomeTitle from "./homeTitle";
import HomeCenterImage from "./homeCenterImage";
import HomeProfileImageStation from "./homeProfileImageStation";
import { useScroll } from "framer-motion";
import useTargetPosition from "@/hooks/useTargetPosition";
import { useDispatch, useSelector } from "@/redux/hooks";
import {
  setScrollYProgress,
  setTargetPosition,
} from "@/redux/features/homeTopSection";

interface IHomeTopSectionProps {
  className?: string;
}

function HomeTopSection(props: IHomeTopSectionProps) {
  const { className } = props;

  const dispatch = useDispatch();
  const homeTopSectionStore = useSelector("homeTopSection");

  const targetRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"],
  });

  const targetPosition = useTargetPosition(targetRef, containerRef);

  useEffect(() => {
    dispatch(setScrollYProgress(scrollYProgress));
    dispatch(setTargetPosition(targetPosition));
  }, [scrollYProgress, targetPosition]);

  return (
    <div
      className={cn("w-full flex flex-col items-center relative", className)}
      ref={containerRef}
    >
      <HomeTitle />
      {homeTopSectionStore.scrollYProgress && <HomeProfileImageStation />}
      <HomeCenterImage ref={targetRef} />
    </div>
  );
}

export default HomeTopSection;
