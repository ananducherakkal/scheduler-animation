import { cn } from "@/utils/shadcn";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface IHomeCenterImageProps {
  className?: string;
}

const HomeCenterImage = React.forwardRef<HTMLDivElement, IHomeCenterImageProps>(
  (props, ref) => {
    const { className } = props;

    return (
      <motion.div
        className={cn("w-4/5 max-w-[1000px] h-fit relative", className)}
      >
        <div
          className="absolute w-[76.03%] h-[10.85%] top-[39.19%] left-[8.34%] z-30"
          ref={ref}
        ></div>
        <Image
          src="/images/home-center-board.png"
          alt="home center board"
          width="1000"
          height="571"
          className="w-full h-full object-contain"
        />
      </motion.div>
    );
  }
);

export default HomeCenterImage;
