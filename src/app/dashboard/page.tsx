"use client";

import SideMenu from "@/components/sideMenu";
import TopNav from "@/components/topNav";
import { useAppSelector } from "@/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import PatientDashboard from "./components/PatientDashboard";

const Dashboard = () => {
  // const IsLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
//   const router = useRouter();
 
//  useEffect(() => {
//   if (!IsLoggedIn) {
//     router.push("/sign-in");
//   }
//  }, [IsLoggedIn, router])
  
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav />
      <div className="flex">
      <SideMenu />
      <PatientDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
