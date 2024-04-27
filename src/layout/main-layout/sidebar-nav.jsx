import { NavLink } from "react-router-dom";
import logo from "/images/logo.png";
import { CiVideoOn } from "react-icons/ci";
const SidebarNav = () => {
  return (
    <div>
      <div className="py-16 px-4 gap-8 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={logo} alt="hamid asadi" width={150} />
          <p className="text-sm font-semibold text-slate-400">
            یادگیری آسان و پروژه محور
          </p>
        </div>
        <div className="w-full">
          <h3 className="font-semibold text-lg">دوره های من</h3>
          <ul className="text-slate-400 flex flex-col gap-2 mt-2 w-full">
            <li>
              <NavLink to="/" className="flex items-center justify-start gap-2">
                <span>
                  <CiVideoOn className="w-4 h-4 font-bold" />
                </span>
                همه دوره‌ها
              </NavLink>
            </li>
            <li>
              <NavLink to=" " className="flex items-center justify-start gap-2">
                <span>
                  <CiVideoOn className="w-4 h-4 font-bold" />
                </span>
                دسته بندی دوره ها
              </NavLink>
            </li>
            <li>
              <NavLink to=" " className="flex items-center justify-start gap-2">
                <span>
                  <CiVideoOn className="w-4 h-4 font-bold" />
                </span>
                تخفیف دوره ها
              </NavLink>
            </li>
          </ul>
          <h3 className="font-semibold text-lg mt-8">مدیریت کاربران</h3>
          <ul className="text-slate-400 flex flex-col gap-2 mt-2 w-full">
            <li>
              <NavLink to=" " className="flex items-center justify-start gap-2">
                <span>
                  <CiVideoOn className="w-4 h-4 font-bold" />
                </span>
                مدیریت دانشجوها
              </NavLink>
            </li>
            <li>
              <NavLink to=" " className="flex items-center justify-start gap-2">
                <span>
                  <CiVideoOn className="w-4 h-4 font-bold" />
                </span>
                مدیریت مدرسین
              </NavLink>
            </li>
          </ul>
          <h3 className="font-semibold text-lg mt-8">مدیریت پست ها</h3>
          <ul className="text-slate-400 flex flex-col gap-2 mt-2 w-full">
            <li>
              <NavLink to=" " className="flex items-center justify-start gap-2">
                <span>
                  <CiVideoOn className="w-4 h-4 font-bold" />
                </span>
                مدیریت پست ها
              </NavLink>
            </li>
            <li>
              <NavLink to=" " className="flex items-center justify-start gap-2">
                <span>
                  <CiVideoOn className="w-4 h-4 font-bold" />
                </span>
                مدیریت تگ ها
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
