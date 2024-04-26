import { useAppContext } from "../../context/app-context";
import { HiBars3BottomRight } from "react-icons/hi2";
import ChangeLanguage from "../../components/change-language";
const Header = () => {
  const { toggleSidebar } = useAppContext();
  return (
    <header className="h-[100px] gap-4 bg-slate-800 w-full flex items-center justify-start px-2">
      <HiBars3BottomRight
        onClick={toggleSidebar}
        className="w-8 h-8 cursor-pointer"
      />
      <ChangeLanguage />
    </header>
  );
};

export default Header;
