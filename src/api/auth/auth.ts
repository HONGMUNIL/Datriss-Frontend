import axiosInstance from "../axiosInstance";
import type {  SigninRequest, SigninResponse } from "../../types/auth/auth";

export const login = async (req: SigninRequest) => {
  const { data } = await axiosInstance.post<SigninResponse>("/auth/login", req);
  
  return data;
};