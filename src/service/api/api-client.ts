import Axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { baseUrl } from "./baseUrl";






//!remove log when test is complete
// console.log({BaseUrl,CloudFrontUrl})

const client = async (
  url: string,
  { data, method = "GET", ...customConfig }: AxiosRequestConfig = {}
) => {


  console.log("baseUrl from inside client", JSON.stringify({url, data}))
  const cachedToken = ""
  const axiosApi = Axios.create({
    baseURL: baseUrl, 
    headers: {
      Authorization: cachedToken !== "" ?  `Bearer ${cachedToken}` : null,
      "Content-Type":  "application/json"
    },
  });
  // const axiosInstance = Axios.create({
  //   baseURL: getBaseUrl(type),
  //   headers: {
  //     Authorization: `Bearer ${cachedToken}`,
  //     "Content-Type": "application/json",
  //   },
  //   withCredentials: true,
  // });

  axiosApi.interceptors.request.use(
    async (config) => {
      console.log("Axios Config", config)
      return config;
    },
    (error) => {
      console.log("interceptors.request error:", error);
      return Promise.reject(error);
    }
  );

  try {
    const response: AxiosResponse = await axiosApi.request({
      url:url,
      method,
      data,
      ...customConfig,
    });
    return response
  } catch (error) {
    console.error("Request failed with error:", error);
  }

  axiosApi.interceptors.response.use(
    async (response: AxiosResponse) => {
      console.log("AXIOS RESPONSE", JSON.stringify(response))
      return response},
    async (err: AxiosError) => {
      return Promise.reject(err);
    }
  );
};

export default client;
