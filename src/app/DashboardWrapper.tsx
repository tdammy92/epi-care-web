"use client";

import React from "react";
import SideMenu from "@/components/sideMenu";
import TopNav from "@/components/topNav";
import { store, useAppSelector } from "@/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.auth.isSidebarCollapsed
  );

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
        <DashboardLayout>{children}</DashboardLayout>
      </Provider>
    </QueryClientProvider>
  );
};

export default DashboardWrapper;
