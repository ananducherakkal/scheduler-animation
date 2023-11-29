import HomeCenterImage from "@/components/home/homeCenterImage";
import HomeTitle from "@/components/home/homeTitle";
import HomeTopSection from "@/components/home/homeTopSection";
import React from "react";

function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-between flex-1 min-h-screen mx-auto">
      <HomeTopSection />
      <HomeCenterImage />
    </main>
  );
}

export default Home;
