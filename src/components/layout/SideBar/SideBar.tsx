import { useNavigate } from "react-router-dom";
import SideBarItem from "../SideBarItem/SideBarItem";

function SideBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loginEmail");
    localStorage.removeItem("access_token");
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen w-64 flex-col border-r p-6">
      <button
        onClick={() => navigate("/dashboard")}
        className="mb-8 flex cursor-pointer border-b text-left text-2xl font-bold text-indigo-600"
      >
        <img
          src="/d.png"
          alt="logo"
          className="h-7 w-7 rounded-lg object-cover"
        />
        <span className="ml-2">datriss</span>
      </button>

      <nav className="flex-1 space-y-6">
        <div>
          <p className="mb-2 text-xs font-bold text-slate-400">회원관리</p>

          <div className="space-y-1">
            <SideBarItem to="/dashboard/members">회원 목록</SideBarItem>
            <SideBarItem to="/dashboard/member-grades">
              회원 등급 관리
            </SideBarItem>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold text-slate-400">상품관리</p>

          <div className="space-y-1">
            <SideBarItem to="/dashboard/products">상품 목록</SideBarItem>
          </div>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold text-slate-400">결제관리</p>

          <div className="space-y-1">
            <SideBarItem to="/dashboard/payments">결제 내역</SideBarItem>
            <SideBarItem to="/dashboard/refunds">환불 관리</SideBarItem>
          </div>
        </div>
      </nav>

      <button
        onClick={handleLogout}
        className="mt-6 cursor-pointer rounded-lg bg-red-200 px-4 py-2 text-left text-sm font-semibold text-red-500 transition hover:bg-red-50"
      >
        로그아웃
      </button>
    </div>
  );
}

export default SideBar;