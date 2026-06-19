import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header";
import SideBar from "../../components/layout/SideBar/SideBar";
import Footer from "../../components/layout/Footer";

function DashboardLayout() {
  return (
    <div className="flex h-screen bg-slate-100">
      <SideBar />

      <div className="flex flex-1 flex-col">
        <Header />

        <main className="flex-1 overflow-y-auto ">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;