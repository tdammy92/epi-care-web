"use client";

import React from "react";
import { Phone, ChevronLeft } from "lucide-react";
import Avatar from "../avatar";
import { useAppSelector } from "@/store";
import NavIcon from "../navIcon";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setIsSidebarCollapsed } from "@/store/auth-store";
import { usePathname } from "next/navigation"; 

const SideMenu = () => {
  const dispatch = useDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.auth.isSidebarCollapsed
  );
  const user = useAppSelector((state) => state.auth.UserDetails);
  const pathname = usePathname(); 

  return (
    <aside
      className={`${
        isSidebarCollapsed ? "w-20" : "w-64"
      } bg-white h-screen p-4 border-r transition-all duration-300 ease-in-out relative`}
    >
      <button
        onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
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
          <Avatar
            size={48}
            name={`${user?.profile.firstName} ${user?.profile.lastName}`}
          />
        </div>
        {!isSidebarCollapsed && (
          <div>
            <div className="font-semibold">
              {`${user?.profile.firstName} ${user?.profile.lastName}`}{" "}
            </div>
            <div className="text-sm text-gray-500">
              {user?.role?.toUpperCase()}
            </div>
          </div>
        )}
      </div>

      <nav className="space-y-2">
        {user?.access?.map((item, index) => {
          const isActive =
            pathname === item?.path || pathname.startsWith(item?.path + "/");

          return (
            <Link
              href={item?.path}
              key={index}
              className={`flex items-center ${
                isSidebarCollapsed ? "justify-center" : "space-x-3"
              } p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                isActive
                  ? "bg-indigo-100 text-indigo-600 font-semibold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              title={isSidebarCollapsed ? item.name : ""}
            >
              <NavIcon className="w-5 h-5" iconName={item?.icon} />
              {!isSidebarCollapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
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
