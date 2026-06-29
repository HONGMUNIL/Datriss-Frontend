import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import SideBar from "../../components/layout/SideBar/SideBar";
import Footer from "../../components/layout/Footer";
import { useEffect } from "react";
import { getUserInfo } from "../../api/users/me";

function DashboardLayout() {
  useEffect(() => {
    const fetchMe = async () => {
      try {
        const userInfo = await getUserInfo();

        console.log("대시보드 내 정보:", userInfo);

        localStorage.setItem("loginEmail", userInfo.email);
      } catch (error) {
        console.error("내 정보 조회 실패:", error);
      }
    };

    fetchMe();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      <SideBar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header />

        <main className="min-h-0 flex-1 overflow-y-auto">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;