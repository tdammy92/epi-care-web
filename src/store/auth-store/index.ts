import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import initialState from './initialState';
import { authStoreType } from '@/types/store-type/authStore';
import { Iprofile } from '@/types/user-type';


export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state: authStoreType) => {
      console.log("From Deep in Redux")
      state.isLoggedIn = true;
    },
    logOutUser: state => {
      state.isLoggedIn = false;
    },
    addUserDetails: (state: authStoreType, {payload}: PayloadAction<Iprofile>) => {
      state.UserDetails = payload;
    },
    
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
  },
  },
});

// Action creators are generated for each case reducer function
export const {loginUser, logOutUser, addUserDetails, setIsSidebarCollapsed} =
  AuthSlice.actions;

// export reducer function
export default AuthSlice.reducer;