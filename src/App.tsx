import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Members from './pages/dashboard/Member/Members'
import Login from './pages/Login'
import DashboardLayout from './pages/dashboard/DashboardLayout'
import { Navigate } from 'react-router'
import MembersGrade from './pages/dashboard/Member/MembersGrade'
import Payments from './pages/dashboard/Payment/Payments'
import Refund from './pages/dashboard/Payment/Refund'

function App() {



  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/members' element={<Members />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard/members" replace />} />
          <Route path="members" element={<Members />} />
          <Route path="member-grades" element={<MembersGrade />} />
          <Route path="payments" element={<Payments />} />
          <Route path="refunds" element={<Refund />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
