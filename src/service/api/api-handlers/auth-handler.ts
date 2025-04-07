
import client from "../api-client";

import { loginUrl } from "../endpoints";

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
