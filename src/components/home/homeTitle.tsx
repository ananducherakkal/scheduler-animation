import { cn } from "@/utils/shadcn";
import React from "react";
import Button from "../ui/button";

interface IHomeTitleProps {
  className?: string;
}

function HomeTitle(props: IHomeTitleProps) {
  const { className } = props;

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <h1 className="text-8xl font-medium text-center">
        Looking for a better
        <br />
        way to Schedule?
      </h1>
      <h2 className="text-text-secondary text-lg text-center mt-6">
        With scheduler, you can save up to 90% of the time spend on employee
        scheduling, time tracking and payroll.
      </h2>
      <Button className="mt-7">Create your first schedule</Button>
    </div>
  );
}

export default HomeTitle;
