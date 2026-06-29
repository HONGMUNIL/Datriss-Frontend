import axiosInstance from "../axiosInstance";
import type { Product } from "../../types/product/Product";

export const getProducts = async (platformCode?: string): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>("/products", {
    params: {
      platform: platformCode,
    },
  });

  return response.data;
};