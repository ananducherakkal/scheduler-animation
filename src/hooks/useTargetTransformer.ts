import { useSelector } from "@/redux/hooks";
import { MotionValue, useTransform } from "framer-motion";

export interface ITarget {
  row: number;
  column: number;
}
export interface IPosition {
  x: number;
  y: number;
  scale: number;
}

const useTargetTransformer = (target: ITarget, position: IPosition) => {
  const homeTopSectionStore = useSelector("homeTopSection");

  const { scrollYProgress, targetPosition } = homeTopSectionStore;

  const x = useTransform(
    scrollYProgress as MotionValue<number>,
    [0, 1],
    [
      `${position.x}px`,
      `${target.column * targetPosition.offsetX + targetPosition.x}px`,
    ]
  );
  const y = useTransform(
    scrollYProgress as MotionValue<number>,
    [0, 1],
    [
      `${position.y}px`,
      `${target.row * targetPosition.offsetY + targetPosition.y}px`,
    ]
  );
  const scale = useTransform(
    scrollYProgress as MotionValue<number>,
    [0, 1],
    [`${position.scale}%`, "100%"]
  );

  return { x, y, scale };
};

export default useTargetTransformer;
