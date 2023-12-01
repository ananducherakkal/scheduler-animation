"use client";
import React from "react";
import HomeProfileImage from "./homeProfileImage";

function HomeProfileImageStation() {
  return (
    <div className="h-0 w-0">
      <HomeProfileImage
        position={{ x: 19, y: 135, scale: 200 }}
        target={{ row: 0, column: 0 }}
        color="#7BA8FF"
        imageUrl="/images/profile-image-1.png"
      />
      <HomeProfileImage
        position={{ x: 159, y: 199, scale: 200 }}
        target={{ row: 1, column: 0 }}
        color="#00FFB2"
        imageUrl="/images/profile-image-2.png"
      />
      <HomeProfileImage
        position={{ x: 25, y: 233, scale: 150 }}
        target={{ row: 0, column: 1 }}
        color="#E98D8D"
        imageUrl="/images/profile-image-3.png"
      />
      <HomeProfileImage
        position={{ x: 76, y: 280, scale: 250 }}
        target={{ row: 1, column: 1 }}
        color="#FFD600"
        imageUrl="/images/profile-image-4.png"
      />
      <HomeProfileImage
        position={{ x: 136, y: 406, scale: 150 }}
        target={{ row: 0, column: 2 }}
        color="#55E3EF"
        imageUrl="/images/profile-image-5.png"
      />
      <HomeProfileImage
        position={{ x: 36, y: 461, scale: 200 }}
        target={{ row: 1, column: 2 }}
        color="#EBCBD5"
        imageUrl="/images/profile-image-6.png"
      />
      <HomeProfileImage
        position={{ x: 60, y: 133, scale: 150 }}
        target={{ row: 0, column: 3 }}
        color="#C9C1BA"
        right
        imageUrl="/images/profile-image-7.png"
      />
      <HomeProfileImage
        position={{ x: 92, y: 218, scale: 300 }}
        target={{ row: 1, column: 3 }}
        color="#00F0FF"
        right
        imageUrl="/images/profile-image-8.png"
      />
      <HomeProfileImage
        position={{ x: 16, y: 286, scale: 200 }}
        target={{ row: 0, column: 4 }}
        color="#68B1C7"
        right
        imageUrl="/images/profile-image-9.png"
      />
      <HomeProfileImage
        position={{ x: 147, y: 369, scale: 150 }}
        target={{ row: 1, column: 4 }}
        color="#D3D2CA"
        right
        imageUrl="/images/profile-image-10.png"
      />
      <HomeProfileImage
        position={{ x: 23, y: 387, scale: 250 }}
        target={{ row: 0, column: 5 }}
        color="#F6CB63"
        right
        imageUrl="/images/profile-image-11.png"
      />
      <HomeProfileImage
        position={{ x: 110, y: 489, scale: 120 }}
        target={{ row: 1, column: 5 }}
        color="#E7AA76"
        right
        imageUrl="/images/profile-image-12.png"
      />
    </div>
  );
}

export default HomeProfileImageStation;
