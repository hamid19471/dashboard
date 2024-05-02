import { useAppContext } from "../../context/app-context";
import { LiaBarsSolid } from "react-icons/lia";
import ChangeLanguage from "../../components/change-language";
const Header = () => {
  const { toggleSidebar } = useAppContext();
  return (
    <header className="h-[100px] gap-4 bg-slate-800 w-full flex items-center justify-start px-2">
      <a onClick={toggleSidebar}>
        <LiaBarsSolid className="w-8 h-8 cursor-pointer" />
      </a>
      <ChangeLanguage />
    </header>
  );
};

export default Header;
