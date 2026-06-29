import axiosInstance from "../axiosInstance";
import type { UserInfo } from "../../types/users/me";

export const getUserInfo = async (): Promise<UserInfo> => {
  const { data } = await axiosInstance.get<UserInfo>("/users/me");

  console.log("내 정보 응답:", data);

  return data;
};