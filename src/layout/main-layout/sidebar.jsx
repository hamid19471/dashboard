import { useAppContext } from "../../context/app-context";

const Sidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <div
      className={`h-screen bg-red-500 w-[250px] transition-all duration-200 ease-in-out ${
        showSidebar ? "translate-x-0" : "translate-x-full w-0 opacity-0"
      }`}
    >
      hamidkhan
    </div>
  );
};

export default Sidebar;
