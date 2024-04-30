import { Await, useLoaderData } from "react-router-dom";
import CourseList from "../features/courses/component/course-list";
import { Suspense } from "react";

const Courses = () => {
  const data = useLoaderData();
  return (
    <div>
      <button className="px-6 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700">
        افزودن دوره جدید
      </button>
      <div className="flex items-center justify-start gap-2">
        <Suspense
          fallback={
            <p className="text-blue-500 font-bold text-sm mt-12">
              درحال دریافت اطلاعات...
            </p>
          }
        >
          <Await resolve={data.courses}>
            {(courses) => <CourseList courses={courses} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default Courses;
