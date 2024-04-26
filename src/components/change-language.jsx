import { useEffect, useRef, useState } from "react";
import faFlag from "/images/faFlag.jpg";
import usFlag from "/images/usFlag.jpg";
import { useAppContext } from "../context/app-context";
const ChangeLanguage = () => {
  const { language, changeLanguage } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    setIsOpen(false);
  }, [language]);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);
  return (
    <div className="relative">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <img
          src={language === "fa" ? faFlag : usFlag}
          className="w-8 h-8 rounded-full"
        />
      </button>
      <div
        ref={ref}
        className={`absolute bg-slate-700 text-white p-2 gap-1 rounded-lg mt-2 w-[150px] flex flex-col ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          onClick={() => changeLanguage("fa")}
          className="flex items-center gap-2 hover:bg-blue-600 hover:rounded-lg hover:text-white hover:cursor-pointer p-1"
        >
          <img src={faFlag} className="w-10" />
          <span>فارسی</span>
        </div>
        <div
          onClick={() => changeLanguage("en")}
          className="flex items-center gap-2 hover:bg-blue-600 hover:rounded-lg hover:text-white hover:cursor-pointer p-1"
        >
          <img src={usFlag} className="w-10" />
          <span>English</span>
        </div>
      </div>
    </div>
  );
};
export default ChangeLanguage;
