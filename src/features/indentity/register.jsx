import { useForm } from "react-hook-form";
import logo from "/images/logo.png";
import {
  Link,
  useActionData,
  useNavigate,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const formSubmit = useSubmit();
  const isSuccess = useActionData();
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [isSuccess, navigate]);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      mobile: "",
      password: "",
      confirmPassword: "",
    },
  });

  const formControler = {
    mobile: {
      required: {
        value: true,
        message: `${t("register.formvalidation.mobile")}`,
      },
      minLength: 11,
      maxLength: 11,
    },
    password: {
      required: {
        value: true,
        message: `${t("register.formvalidation.password")}`,
      },
    },
    confirmPassword: {
      required: {
        value: true,
        message: `${t("register.formvalidation.confirmPassword")}`,
      },
      validate: {
        value: (value) =>
          value === watch("password") ||
          t("register.formvalidation.confirPasswordNotMatch"),
      },
    },
  };
  const handleRegisterForm = (data) => {
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...newData } = data;
    formSubmit(newData, { method: "POST" });
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center justify-center items-center flex flex-col">
          <img src={logo} alt="hamid asadi" width={180} height={43} />
          <h2 className="font-extrabold text-slate-200 text-4xl leading-10 mt-4">
            {t("register.title")}
          </h2>
          <p className="font-light text-sm text-slate-400">
            {t("register.subtitle")}
          </p>
          <p className="font-bold text-white">
            {t("register.notice")} |
            <Link className="font-bold text-blue-500" to="/login">
              {t("register.loginlink")}
            </Link>
          </p>
        </div>
        <div className="bg-slate-800 p-12 rounded-lg w-[500px] mt-8">
          <form onSubmit={handleSubmit(handleRegisterForm)}>
            <div className="flex flex-col gap-2">
              <label
                className={`font-bold text-sm ${
                  errors.mobile && "text-red-500 text-sm"
                }`}
              >
                {errors.mobile
                  ? errors.mobile.message
                  : t("register.formlabel.mobile")}
              </label>
              <input
                className={`py-3 px-2 rounded-xl mb-3 focus:ring-2 focus:ring-blue-700 focus:outline-none text-black  ${
                  errors.mobile && "focus:ring-red-600"
                }`}
                {...register("mobile", formControler.mobile)}
                type="text"
                placeholder={t("register.formplaceholders.mobile")}
              />
            </div>
            <div className="flex flex-col gap-2 my-4">
              <label
                className={`font-bold text-sm ${
                  errors.password && "text-red-500 text-sm"
                }`}
              >
                {errors.password
                  ? errors.password.message
                  : t("register.formlabel.password")}
              </label>
              <input
                className={`py-3 px-2 rounded-xl mb-3 focus:ring-2 focus:ring-blue-700 focus:outline-none text-black  ${
                  errors.password && "focus:ring-red-600"
                }`}
                {...register("password", formControler.password)}
                type="password"
                placeholder={t("register.formplaceholders.password")}
              />
            </div>
            <div className="flex flex-col gap-2 my-4">
              <label
                className={`font-bold text-sm ${
                  errors.confirmPassword && "text-red-500 text-sm"
                }`}
              >
                {errors.confirmPassword
                  ? errors.confirmPassword.message
                  : t("register.formlabel.confirmPassword")}
              </label>
              <input
                className={`py-3 px-2 rounded-xl mb-3 focus:ring-2 focus:ring-blue-700 focus:outline-none text-black  ${
                  errors.confirmPassword && "focus:ring-red-600"
                }`}
                {...register("confirmPassword", formControler.confirmPassword)}
                type="password"
                placeholder={t("register.formplaceholders.confirmPassword")}
              />
            </div>
            <button
              disabled={!isValid}
              className={`w-full bg-blue-600 py-2 rounded-lg ${
                !isValid && "bg-blue-800 text-slate-500 pointer-events-none"
              }`}
            >
              {isSubmitting ? t("register.proccess") : t("register.button")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
