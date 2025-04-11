import { Iprofile } from "@/types/user-type";



export type authStoreType = {
    isLoggedIn: boolean;
    UserDetails: Iprofile | null;
    isSidebarCollapsed: boolean,
  };