import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLogin from "../pages/auth/UserLogin";
import UserRegister from "../pages/auth/UserRegister";
import PartnerLogin from "../pages/auth/PartnerLogin";
import PartnerRegister from "../pages/auth/PartnerRegister";
import Home from "../pages/Home/Home";
import CreateFood from "../pages/foodPartner/CreateFood";
import FoodPartnerProfile from "../pages/user/FoodPartnerProfile";
import ErrorPage from "../pages/error/errorPage";
import UserProfile from "../pages/user/UserProfile";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Routes */}
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        {/* Food Partner Routes */}
        <Route path="/partner/login" element={<PartnerLogin />} />
        <Route path="/partner/register" element={<PartnerRegister />} />
        <Route path="/" element={<Home />} />
        <Route path="/createFood" element={<CreateFood />} />
        <Route path="/foodPartner/:id" element={<FoodPartnerProfile />} />
        <Route path="/user/profile" element={<UserProfile />} />;
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
