import { Outlet } from "react-router-dom";

const IdentityLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-[500px] m-auto">
      <div className="bg-slate-800 p-12 rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default IdentityLayout;
