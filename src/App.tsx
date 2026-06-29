import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Members from "./pages/dashboard/Member/Members";
import Login from "./pages/Login";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import MembersGrade from "./pages/dashboard/Member/MembersGrade";
import Payments from "./pages/dashboard/Payment/Payments";
import Refund from "./pages/dashboard/Payment/Refund";
import Products from "./pages/dashboard/Product/Products";

function App() {
  // const isLogin = localStorage.getItem("accessToken"); 렌더링 안되서 화면 바뀌어도 적용이안됨
  // const [isLogin, setIsLogin] = useState(false);

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");

  //   if (accessToken) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // }, []); 대충 이런느낌 useEffcet 해야할듯

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="members" replace />} />
        <Route path="members" element={<Members />} />
        <Route path="member-grades" element={<MembersGrade />} />
        <Route path="payments" element={<Payments />} />
        <Route path="refunds" element={<Refund />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;