import { Outlet } from "react-router-dom";
const IdentityLayout = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen w-full m-auto">
      <header className="h-[100px] bg-slate-800 w-full flex items-center justify-start pr-10">
        header
      </header>
      <div className="flex gap-4 flex-col items-center justify-center">
        <main className="">
          <Outlet />
        </main>
      </div>
      <footer className="h-[50px] flex items-center justify-center bg-slate-800 w-full text-slate-500">
        تمامی حقوق مادی و معنوی محفوظ است | &copy; ۱۴۰۳
      </footer>
    </div>
  );
};

export default IdentityLayout;
