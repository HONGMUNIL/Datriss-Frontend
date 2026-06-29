export interface Platform {
  id: number;
  code: string;
  name: string;
  baseUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  platformId: number;
  name: string;
  productUrl: string;
  rating: number | null;
  originalPrice: string | null;
  salePrice: string | null;
  shippingFee: string | null;
  productInfo: string | null;
  createdAt: string;
  updatedAt: string;
  platform: Platform;
}