import { useAppContext } from "../../context/app-context";
import SidebarNav from "./sidebar-nav";
const Sidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <div
      className={`h-screen origin-top-right bg-slate-700 absolute z-20 lg:z-0 lg:static w-56 transition-all duration-200 ease-in-out  ${
        showSidebar ? "translate-x-0" : "translate-x-full opacity-0 -mr-56"
      }`}
    >
      <SidebarNav />
    </div>
  );
};

export default Sidebar;
