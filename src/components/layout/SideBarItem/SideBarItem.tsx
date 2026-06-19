import { NavLink } from "react-router-dom";
import type { SideBarItemProps } from "./SideBarItem.types";

function SideBarItem({ to, children, className = "" }: SideBarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block rounded-lg px-4 py-2 text-sm transition ${
          isActive? 
            "bg-indigo-600 font-bold text-white"
            : "text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
        } ${className}`
      }
    >
      {children}
    </NavLink>
  );
}

export default SideBarItem;