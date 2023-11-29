import { cn } from "@/utils/shadcn";
import React from "react";
import styles from "./home.module.css";
import HomeTitle from "./homeTitle";
import HomeTopLeftSection from "./homeTopLeftSection";
import HomeTopRightSection from "./homeTopRightSection";

interface IHomeTopSectionProps {
  className?: string;
}

function HomeTopSection(props: IHomeTopSectionProps) {
  const { className } = props;

  return (
    <div
      className={cn(
        "w-full flex items-center px-5 space-x-6",
        className,
        styles.topSection
      )}
    >
      <HomeTopLeftSection />
      <HomeTitle />
      <HomeTopRightSection />
    </div>
  );
}

export default HomeTopSection;
