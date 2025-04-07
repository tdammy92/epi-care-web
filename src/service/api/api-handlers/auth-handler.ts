
// import { RegisterPayload } from "@/types/user-type";
import client from "../api-client";

import { loginUrl, registerUrl } from "../endpoints";

interface LoginPayload {
  email: string;
  password: string;
}


export const handleLogin = async (payload: LoginPayload) => {
  const url = `${loginUrl}`;

  return await client(url, {
    method: "POST",
    data: payload,
  });
};




export const handleRegister = async (payload: any) => {
  const url = `${registerUrl}`

  return await client (url, {
    method: "POST",
    data: payload,
  })
}
