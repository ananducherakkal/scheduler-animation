import { useEffect, useState } from "react";

export interface ITargetPosition {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
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
  });

  const calculatePosition = () => {
    if (targetRef.current && containerRef.current) {
      const elementRect = targetRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const containerWidth = containerRef.current.scrollWidth;
      const containerHeight = containerRef.current.scrollHeight;
      const elementWidth = targetRef.current.scrollWidth / 6;
      const elementHeight = targetRef.current.scrollHeight;
      const positionX = 0.065;
      const positionY = 0.505;
      const innerX = elementWidth * positionX;
      const innerY = elementHeight * positionY;

      setPosition({
        y: elementRect.top - containerRect.top + innerY,
        x: elementRect.left - containerRect.left + innerX,
        offsetX: elementWidth,
        offsetY: elementHeight,
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
