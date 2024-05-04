import { useAppContext } from "../../context/app-context";
import { LiaBarsSolid } from "react-icons/lia";
import ChangeLanguage from "../../components/change-language";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const { toggleSidebar } = useAppContext();
  return (
    <header className="h-[100px] gap-4 bg-slate-800 w-full flex items-center justify-between px-2">
      <div className="flex items-center justify-center gap-2 h-auto">
        <a onClick={toggleSidebar}>
          <LiaBarsSolid className="w-8 h-8 cursor-pointer" />
        </a>
        <ChangeLanguage />
      </div>
      <button
        className="px-6 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700"
        onClick={handleLogout}
      >
        خروج
      </button>
    </header>
  );
};

export default Header;
