'use client'

import React, { useState } from "react";
import {
  Eye,
  UserCog,
  Calendar,
  Users,
  Brain,
  Building2,
  UserCheck,
  Phone,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";

const SideMenu = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  return (
    <aside
      className={`${
        isSidebarCollapsed ? "w-20" : "w-64"
      } bg-white h-screen p-4 border-r transition-all duration-300 ease-in-out relative`}
    >
      <button
        onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        className="absolute -right-3 top-8 bg-white border rounded-full p-1 shadow-md hover:bg-gray-50"
      >
        <ChevronLeft
          className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
            isSidebarCollapsed ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`flex items-center ${
          isSidebarCollapsed ? "justify-center" : "space-x-3"
        } mb-8`}
      >
        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
          {/* <Image
            src=""
            alt="Profile"
            width={48}
            height={48}
          /> */}
        </div>
        {!isSidebarCollapsed && (
          <div>
            <div className="font-semibold">Nick Gonzalez</div>
            <div className="text-sm text-gray-500">Dept Admin</div>
          </div>
        )}
      </div>

      <nav className="space-y-2">
        <div
          className={`flex items-center ${
            isSidebarCollapsed ? "justify-center" : "space-x-3"
          } p-3 bg-indigo-50 text-indigo-600 rounded-lg`}
        >
          <Building2 className="w-5 h-5" />
          {!isSidebarCollapsed && <span>Hospital Dashboard</span>}
        </div>
        {[
          { icon: UserCog, label: "Medical Dashboard" },
          { icon: Brain, label: "Dentist Dashboard" },
          { icon: Users, label: "Doctors" },
          { icon: Eye, label: "Patients" },
          { icon: UserCheck, label: "Staff" },
          { icon: Calendar, label: "Appointments" },
          { icon: Building2, label: "Departments" },
          { icon: Users, label: "Accounts" },
          { icon: Users, label: "Human Resources" },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex items-center ${
              isSidebarCollapsed ? "justify-center" : "space-x-3"
            } p-3 hover:bg-gray-100 rounded-lg cursor-pointer`}
            title={isSidebarCollapsed ? item.label : ""}
          >
            <item.icon className="w-5 h-5" />
            {!isSidebarCollapsed && <span>{item.label}</span>}
          </div>
        ))}
      </nav>

      <div
        className={`mt-8 bg-green-500 text-white p-4 rounded-lg ${
          isSidebarCollapsed ? "text-center" : ""
        }`}
      >
        <div className="text-sm font-semibold mb-2">
          {!isSidebarCollapsed && "Emergency Contact"}
        </div>
        <div
          className={`flex items-center ${
            isSidebarCollapsed ? "justify-center" : "space-x-2"
          }`}
        >
          <Phone className="w-5 h-5" />
          {!isSidebarCollapsed && <span>098765432</span>}
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
