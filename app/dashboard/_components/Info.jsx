"use client";

import React from "react";
import { UserDetailsContext } from "@/app/_context/UserDetailsContext";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Info() {
  const { userDetails } = useContext(UserDetailsContext);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome, {userDetails?.name}</h1>
      <p className="text-gray-600 mb-8">
        Here are all your generated logos. Click on any logo to download it.
      </p>
    </div>
  );
}

export default Info;
