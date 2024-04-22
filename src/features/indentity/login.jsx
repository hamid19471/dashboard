import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm({
    mode: "onBlur",
    defaultValues: {},
  });
  const formControler = {
    phone: {
      require: {
        value: true,
        message: "لطفا شماره تماس خود را وارد کنید",
        minLingth: 11,
        maxLength: 11,
      },
    },
    password: {
      require: {
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
        <div>
          <label>شماره تماس</label>
          <input
            {...register("phone", formControler)}
            type="text"
            placeholder="شماره تماس خود را وارد کنید"
          />
        </div>
        <div>
          <label>رمز عبور</label>
          <input
            {...register("password", formControler)}
            type="text"
            placeholder="رمز عبور خود را وارد کنید"
          />
        </div>
      </form>
    </div>
  );
};
export default Login;
