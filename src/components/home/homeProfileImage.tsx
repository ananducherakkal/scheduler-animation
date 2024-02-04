import React from "react";
import { motion } from "framer-motion";
import useTargetTransformer, {
  IPosition,
  ITarget,
} from "@/hooks/useTargetTransformer";
import { useSelector } from "@/redux/hooks";
import Image from "next/image";

interface IHomeProfileImage {
  target: ITarget;
  position: IPosition;
  color: string;
  right?: boolean;
  imageUrl: string;
}

function HomeProfileImage(props: IHomeProfileImage) {
  const { target, position, color, imageUrl, right = false } = props;
  const homeTopSectionStore = useSelector("homeTopSection");

  const { targetPosition } = homeTopSectionStore;
  const _position = {
    ...position,
    x: right
      ? targetPosition.containerWidth -
        position.x -
        targetPosition.size * (position.scale / 100)
      : position.x,
  };
  const { x, y, scale } = useTargetTransformer(target, _position);

  return (
    <motion.div
      initial={{
        x: `${_position.x}%`,
        y: `${_position.y}%`,
        scale: `${_position.scale}%`,
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      style={{
        x,
        y,
        scale,
        backgroundColor: color,
        width: `${targetPosition.size}px`,
        height: `${targetPosition.size}px`,
      }}
      transition={{ duration: 1 }}
      className="rounded-full absolute top-0 left-0 z-40 hidden overflow-hidden md:block"
    >
      <Image
        src={imageUrl}
        alt="profile image"
        width="200"
        height="200"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}

export default HomeProfileImage;
