import { useForm } from "react-hook-form";
import logo from "/images/logo.png";
import { Link, useNavigation, useSubmit } from "react-router-dom";

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state !== "idle";
  const formSubmit = useSubmit();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      mobile: "",
      password: "",
    },
  });
  const formControler = {
    mobile: {
      required: {
        value: true,
        message: "لطفا شماره تماس خود را وارد کنید",
      },
      minLingth: 11,
      maxLength: 11,
    },
    password: {
      required: {
        value: true,
        message: "لطفا رمز عبور خود را وارد کنید",
      },
    },
  };
  const handleLoginSubmit = (data) => {
    formSubmit(data, { method: "POST" });
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center justify-center items-center flex flex-col">
        <img src={logo} alt="hamid asadi" width={180} height={43} />
        <h2 className="font-extrabold text-slate-200 text-4xl leading-10 mt-4">
          خوش آمدید
        </h2>
        <p className="font-light text-sm text-slate-400">
          جهت استفاده از خدمات وارد شوید
        </p>
        <p className="font-bold text-white ">
          جهت ثبت نام کلیک کنید | ‌
          <Link className="font-bold text-blue-500" to="/register">
            ثبت نام
          </Link>
        </p>
      </div>
      <div className="bg-slate-800 p-12 rounded-lg w-[500px] mt-8">
        <form onSubmit={handleSubmit(handleLoginSubmit)}>
          <div className="flex flex-col gap-2">
            <label
              className={`font-bold text-sm ${
                errors.mobile && "text-red-500 text-sm"
              }`}
            >
              {errors.mobile ? errors.mobile.message : "شماره تماس"}
            </label>
            <input
              className={`py-3 px-2 rounded-xl mb-3 focus:ring-2 focus:ring-blue-700 focus:outline-none text-black  ${
                errors.mobile && "focus:ring-red-600"
              }`}
              {...register("mobile", formControler.mobile)}
              type="text"
              placeholder="شماره تماس خود را وارد کنید"
            />
          </div>
          <div className="flex flex-col gap-2 my-4">
            <label
              className={`font-bold text-sm ${
                errors.password && "text-red-500 text-sm"
              }`}
            >
              {errors.password ? errors.password.message : "رمز عبور"}
            </label>
            <input
              className={`py-3 px-2 rounded-xl mb-3 focus:ring-2 focus:ring-blue-700 focus:outline-none text-black  ${
                errors.password && "focus:ring-red-600"
              }`}
              {...register("password", formControler.password)}
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
            />
          </div>
          <button
            disabled={!isValid}
            className={`w-full bg-blue-600 py-2 rounded-lg ${
              !isValid && "bg-blue-900 text-slate-500 pointer-events-none"
            }`}
          >
            {isSubmitting ? "لطفا صبر کنید ..." : "ورود"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
