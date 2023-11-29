import { cn } from "@/utils/shadcn";
import Image from "next/image";
import React from "react";

interface IHomeCenterImageProps {
  className?: string;
}

function HomeCenterImage(props: IHomeCenterImageProps) {
  const { className } = props;

  return (
    <div className={cn("w-full max-w-[1000px] h-fit", className)}>
      <Image
        src="/images/home-center-board.png"
        alt="home center board"
        width="1000"
        height="571"
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export default HomeCenterImage;
