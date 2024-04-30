import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="h-[50px] flex items-center justify-center bg-slate-800 w-full text-slate-500 ">
      {t("footer.title")}
    </footer>
  );
};

export default Footer;
