import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const data = useLoaderData();
  return (
    <div>
      <div>
        <Suspense fallback={<div>درحال دریافت اطلاعات ...</div>}>
          <Await resolve={data.courseDetail}>
            {(courseDetail) => (
              <CourseDetailContents courseDetail={courseDetail} />
            )}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default CourseDetails;

const CourseDetailContents = ({ courseDetail }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="bg-slate-700 p-5 rounded-lg flex items-center justify-center">
        <img
          src={courseDetail.coverImageUrl}
          alt={courseDetail.title}
          className="w-full rounded-lg mb-4 object-cover"
          width={414}
          height={246}
        />
      </div>
      <div className="flex flex-col items-start gap-5">
        <div className="bg-slate-700 p-4 rounded-lg">
          <h2 className="font-bold text-3xl mb-2">توضیحات دوره</h2>
          <span className="text-sm bg-blue-600 text-white px-2 py-1 rounded-lg">
            {courseDetail.courseLevel}
          </span>
          <p className="text-sm text-stone-300 font-light mt-5">
            {courseDetail.description}
          </p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-3 font-bold w-full gap-6">
          <div className="flex flex-col gap-3 items-center bg-slate-700 py-8 rounded-lg justify-center text-center w-full">
            <h2 className="text-2xl font-bold text-white">تعداد فصل:</h2>
            <span className="text-slate-300 font-light ">
              {courseDetail.numOfChapters} فصل
            </span>
          </div>
          <div className="flex flex-col gap-3 items-center bg-slate-700 py-8 rounded-lg justify-center text-center w-full">
            <h2 className="text-2xl font-bold text-white">تعداد درس:</h2>
            <span className="text-slate-300 font-light ">
              {courseDetail.numOfLectures} در هر فصل
            </span>
          </div>
          <div className="flex flex-col gap-3 items-center bg-slate-700 py-8 rounded-lg justify-center text-center w-full">
            <h2 className="text-2xl font-bold text-white">تعداد نظرات: </h2>
            <span className="text-slate-300 font-light ">
              {courseDetail.averageReviewRating} نظر
            </span>
          </div>
        </div>
        <div className="bg-slate-700 w-full py-11 px-4 rounded-lg flex items-center justify-between">
          <h3 className="font-bold text-xl">
            قیمت: {courseDetail.basePrice} تومان
          </h3>
          <button className="bg-blue-500 px-8 py-4 rounded-lg hover:scale-110 duration-300 transition-all ease-in-out">
            خرید دوره
          </button>
        </div>
      </div>
    </div>
  );
};
