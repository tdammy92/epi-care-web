import { authStoreType } from "@/types/store-type/authStore";


;
const initialState: authStoreType = {
  isLoggedIn: false,
  UserDetails: null,
  isSidebarCollapsed: false,
};

export default initialState;