import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";

const MainLayout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full z-10 flex flex-col justify-between">
        <Header />
        <main className="flex gap-4 flex-col h-full my-8 mx-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
