"use client";

import { useAppSelector } from "@/store";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import PatientDashboard from "./components/PatientDashboard";
import DoctorDashboard from "./components/DoctorDashboard";

const Dashboard = () => {
  const IsLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const user = useAppSelector((state) => state.auth.UserDetails);
  const router = useRouter();
 
 useEffect(() => {
  if (!IsLoggedIn) {
    router.push("/sign-in");
  }
 }, [IsLoggedIn, router])
  
  return (
    <main className="flex-1 p-8">
      <RenderDashboard role={user?.role} />
      </main>
  );
};

export default Dashboard;

const RenderDashboard = ({role}: {role: string | undefined}) => {
  switch (role) {
    case "patient":
      return <PatientDashboard />
    case "doctor":
      return <DoctorDashboard />
    
      
      
  
    default:
      return <div />
  }
}