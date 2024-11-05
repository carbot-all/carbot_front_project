// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Notification from "./components/notification/Notification";
import Login from "./components/auth/Login";
import Join from "./components/auth/Join";
import CarInfo from "./components/carinfo/CarInfo";
import CarSelect from "./components/carselect/CarSelect";
import Layout from "./components/Layout";
import FindID from "./components/auth/set_id&pw/FindID";
import FindPW from "./components/auth//set_id&pw/FindPW";
import ResetPW from "./components/auth//set_id&pw/ResetPW";
import Mypage from "./components/mypage/Mypage";
import CallbotIcon from "./components/callbot/CallbotIcon";
import AdminLogin from "./components/management/login/AdminLogin";
import AdminDashboard from "./components/management/full/AdminDashboard";
import Avante from "./components/main/MainCarInfo/Avante";
import Grandeur from "./components/main/MainCarInfo/Grandeur";
import Palisade from "./components/main/MainCarInfo/Palisade";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Layout을 모든 페이지의 상위 컴포넌트로 설정 */}
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/MainCarInfo/Avante" element={<Avante />} />
            <Route path="/MainCarInfo/Grandeur" element={<Grandeur />} />
            <Route path="/MainCarInfo/Palisade" element={<Palisade />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/Mypage" element={<Mypage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/findID" element={<FindID />} />
            <Route path="/findPW" element={<FindPW />} />
            <Route path="/resetPW" element={<ResetPW />} />
            <Route path="/CarInfo" element={<CarInfo />} />
            <Route path="/CarSelect" element={<CarSelect />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
        <CallbotIcon />
      </div>
    </Router>
  );
};

export default App;
