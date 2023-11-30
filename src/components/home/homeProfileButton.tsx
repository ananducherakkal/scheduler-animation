import React from "react";
import { MotionValue, motion, useTransform } from "framer-motion";
import { ITargetPosition } from "@/hooks/useTargetPosition";

interface IHomeProfileButton {
  scrollYProgress: MotionValue<number>;
  targetPosition: ITargetPosition;
  targetOrder: { row: number; column: number };
  position: {
    x: number;
    y: number;
    scale: number;
  };
}
function HomeProfileButton(props: IHomeProfileButton) {
  const { scrollYProgress, targetPosition, targetOrder, position } = props;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [
      `${position.x}px`,
      `${targetOrder.row * targetPosition.offsetX + targetPosition.x}px`,
    ]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [
      `${position.y}px`,
      `${targetOrder.column * targetPosition.offsetY + targetPosition.y}px`,
    ]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [`${position.scale}%`, "100%"]
  );

  console.log(
    "yeess",
    `${position.x}px`,
    `${targetOrder.row * targetPosition.offsetX + targetPosition.x}%`
  );
  console.log(
    "yeess",
    `${position.y}px`,
    `${targetOrder.column * targetPosition.offsetY + targetPosition.y}%`
  );

  return (
    <motion.div
      initial={{
        x: `${position.x}%`,
        y: `${position.y}%`,
        scale: `${position.scale}%`,
      }}
      style={{ x, y, scale }}
      transition={{ duration: 1 }}
      className="bg-[#EBCBD5] w-[22px] h-[22px] rounded-full absolute top-0 left-0 z-40"
    ></motion.div>
  );
}

export default HomeProfileButton;
