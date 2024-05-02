import { Await, useLoaderData } from "react-router-dom";
import CategoryList from "../features/course-categories/components/category-list";
import { Suspense } from "react";

const CourseCategories = () => {
  const data = useLoaderData();
  return (
    <div>
      <button className="px-6 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700">
        افزودن دسته جدید
      </button>
      <div className="flex items-center justify-start gap-2">
        <Suspense
          fallback={
            <p className="text-blue-500 font-bold text-sm mt-12">
              درحال دریافت اطلاعات...
            </p>
          }
        >
          <Await resolve={data.categories}>
            {(categories) => <CategoryList categories={categories} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default CourseCategories;
