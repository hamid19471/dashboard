import { Outlet } from "react-router-dom";
import logo from "/images/logo.png";
const IdentityLayout = () => {
  return (
    <div className="flex flex-col items-center justify-between h-screen w-full m-auto">
      <header className="h-[100px] bg-slate-800 w-full flex items-center justify-start pr-10">
        header
      </header>
      <div className="flex gap-4 flex-col items-center justify-center">
        <div className="text-center m-auto">
          <img src={logo} alt="hamid asadi" width={180} height={43} />
          <h2 className="font-extrabold text-slate-200 text-4xl leading-10 mt-4">
            خوش آمدید
          </h2>
          <p className="font-light text-sm text-slate-400">
            جهت استفاده از خدمات وارد شوید
          </p>
        </div>
        <main className="bg-slate-800 p-12 rounded-lg w-[500px]">
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
