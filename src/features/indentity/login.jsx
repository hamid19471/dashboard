import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    console.log(data);
  };
  return (
    <div>
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
            type="text"
            placeholder="رمز عبور خود را وارد کنید"
          />
        </div>
        <button className="w-full bg-blue-600 py-2 rounded-lg">ورود</button>
      </form>
    </div>
  );
};
export default Login;
