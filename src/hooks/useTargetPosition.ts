import { useEffect, useState } from "react";

export interface ITargetPosition {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
  containerWidth: number;
  size: number;
}

const useTargetPosition = (
  targetRef: React.RefObject<HTMLDivElement>,
  containerRef: React.RefObject<HTMLDivElement>
) => {
  const [position, setPosition] = useState<ITargetPosition>({
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
    containerWidth: 0,
    size: 0,
  });

  const calculatePosition = () => {
    if (targetRef.current && containerRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRef.current.scrollWidth;
      const containerHeight = containerRef.current.scrollHeight;
      const targetWidth = targetRef.current.scrollWidth / 6;
      const targetHeight = targetRef.current.scrollHeight;
      const positionX = 0.065;
      const positionY = 0.505;
      const innerX = targetWidth * positionX;
      const innerY = targetHeight * positionY;
      const elementSize = targetWidth * 0.175;

      setPosition({
        y: targetRect.top - containerRect.top + innerY,
        x: targetRect.left - containerRect.left + innerX,
        offsetX: targetWidth,
        offsetY: targetHeight,
        containerWidth,
        size: elementSize,
      });
    }
  };
  useEffect(() => {
    calculatePosition();
    window.addEventListener("resize", calculatePosition);
    return () => {
      window.removeEventListener("resize", calculatePosition);
    };
  }, []);

  return position;
};

export default useTargetPosition;
