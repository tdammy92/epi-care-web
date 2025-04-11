"use client";

import React from "react";
import SideMenu from "@/components/sideMenu";
import TopNav from "@/components/topNav";
import { store } from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import AuthGuard from "./AuthGuard";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {


  return (
    <div className="min-h-screen bg-gray-50">
         <TopNav />
      
      <main
        className="flex"
      >
       <SideMenu />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        retryDelay: 500,
        staleTime: 1000 * 60 * 60 * 24,
        gcTime: 1000 * 60 * 60 * 24,
        networkMode: "offlineFirst",
        refetchOnReconnect: "always",
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthGuard>
        <DashboardLayout>{children}</DashboardLayout>
        </AuthGuard>
      </Provider>
    </QueryClientProvider>
  );
};

export default DashboardWrapper;
