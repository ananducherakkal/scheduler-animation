import { cn } from "@/utils/shadcn";
import React, { useEffect, useRef, useState } from "react";
import HomeTitle from "./homeTitle";
import HomeCenterImage from "./homeCenterImage";
import HomeProfileInitialStation from "./homeProfileInitialStation";

interface IHomeTopSectionProps {
  className?: string;
}

function HomeTopSection(props: IHomeTopSectionProps) {
  const { className } = props;

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn("w-full flex flex-col items-center relative", className)}
      ref={containerRef}
    >
      <HomeTitle />
      <HomeProfileInitialStation targetRef={ref} containerRef={containerRef} />
      <HomeCenterImage ref={ref} />
    </div>
  );
}

export default HomeTopSection;
