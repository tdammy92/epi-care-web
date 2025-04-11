"use client";

import SideMenu from "@/components/sideMenu";
import TopNav from "@/components/topNav";
import { useAppSelector } from "@/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import PatientDashboard from "./components/PatientDashboard";

const Dashboard = () => {
  const IsLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const router = useRouter();
 
 useEffect(() => {
  if (!IsLoggedIn) {
    router.push("/sign-in");
  }
 }, [IsLoggedIn, router])
  
  return (
    <main className="flex-1 p-8">
      <PatientDashboard />
      </main>
  );
};

export default Dashboard;
