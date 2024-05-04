import { useForm } from "react-hook-form";
import { authHttpService } from "../core/httpService";
import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../context/category-context";
import { useEffect } from "react";

const AddOrUpdateCategory = ({ setShowAddOrUpdate }) => {
  const { category, setCategory } = useCategoryContext();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const onSubmitForm = async (data) => {
    setShowAddOrUpdate(false);
    setCategory(null);
    const response = await authHttpService.post("/CourseCategory", data);
    const url = new URL(window.location.href);
    navigate(url.pathname + url.search);
  };

  const handleCancel = () => {
    setShowAddOrUpdate(false);
    setCategory(null);
  };

  useEffect(() => {
    if (category) {
      setValue("name", category.name), setValue("id", category.id);
    }
  }, [category]);

  return (
    <div className="w-full bg-slate-600 p-5 mt-12">
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div className="flex flex-col">
          <label className="font-bold mb-1">نام</label>
          <input
            className="border border-none p-2 rounded-lg bg-slate-500 text-white focus:outline-none mb-3"
            type="text"
            {...register("name", {
              required: {
                value: true,
                message: "نام دسته بندی را وارد کنید",
              },
            })}
          />
        </div>
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <div className="flex gap-2">
          <button
            className="px-6 py-2 bg-red-600 text-white font-semibold text-sm rounded-lg hover:bg-red-700"
            type="button"
            onClick={handleCancel}
          >
            انصراف
          </button>
          <button
            className="px-6 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700"
            type="submit"
          >
            ثبت
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrUpdateCategory;
