"use client";
import HomeTopSection from "@/components/home/homeTopSection";
import StoreProvider from "@/redux/storeProvider";
import React, { useRef } from "react";

function Home() {
  return (
    <main className="w-full flex flex-col flex-1 min-h-screen mx-auto">
      <StoreProvider>
        <HomeTopSection />
      </StoreProvider>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}

export default Home;
