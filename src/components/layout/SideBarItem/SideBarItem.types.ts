import type { ReactNode } from "react";

export type SideBarItemProps = {
  to: string;
  children: ReactNode;
  className?: string;
};