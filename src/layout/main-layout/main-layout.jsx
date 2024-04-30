import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import Header from "./header";
import Footer from "./footer";

const MainLayout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (!token) {
    navigate("/login");
  }
  return (
    <div className="flex w-full h-screen relative">
      <Sidebar />
      <div className="w-full z-10 flex flex-col justify-between">
        <Header />
        <main className="flex gap-4 flex-col h-screen overflow-scroll my-8 mx-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
