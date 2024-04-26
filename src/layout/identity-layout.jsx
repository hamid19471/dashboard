import { useTranslation } from "react-i18next";
import { Outlet, useNavigate } from "react-router-dom";
import ChangeLanguage from "../components/change-language";
import { useEffect } from "react";
const IdentityLayout = () => {
  const { t } = useTranslation();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);
  return (
    <div className="flex flex-col items-center justify-between h-screen w-full m-auto">
      <header className="h-[100px] bg-slate-800 w-full flex items-center justify-start px-10">
        <ChangeLanguage />
      </header>
      <div className="flex gap-4 flex-col items-center justify-center">
        <main className="">
          <Outlet />
        </main>
      </div>
      <footer className="h-[50px] flex items-center justify-center bg-slate-800 w-full text-slate-500">
        {t("footer.title")}
      </footer>
    </div>
  );
};

export default IdentityLayout;
