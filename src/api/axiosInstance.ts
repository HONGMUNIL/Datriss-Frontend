// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,
// })


// export default axiosInstance 
// next용이다 이건 Vite니까 vite로해야함

import axios from "axios";
console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    console.log("요청 주소:", config.baseURL, config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

