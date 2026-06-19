import { useNavigate } from "react-router-dom";
import SideBarItem from "../SideBarItem/SideBarItem";

function SideBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loginEmail");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen w-64 flex-col border-r  p-6">
      <button
        onClick={() => navigate("/dashboard")}
        className="cursor-pointer flex mb-8 text-left text-2xl font-bold border-b text-indigo-600 "
      >
        <img src="/d.png" alt="logo" className="w-7 h-7 object-cover rounded-lg" />
        <span className="ml-2 ">datriss</span>
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
          <p className="mb-2 text-xs font-bold text-slate-400">결제관리</p>

          <div className="space-y-1">
            <SideBarItem to="/dashboard/payments">결제 내역</SideBarItem>
            <SideBarItem to="/dashboard/refunds">환불 관리</SideBarItem>
          </div>
        </div>
      </nav>

      <button
        onClick={handleLogout}
        className="cursor-pointer mt-6 rounded-lg px-4 py-2 text-left text-sm bg-red-200 font-semibold text-red-500 transition hover:bg-red-50"
      >
        로그아웃
      </button>
    </div>
  );
}

export default SideBar;