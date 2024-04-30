import { LuClock8 } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseCard = ({
  id,
  title,
  description,
  coverImageUrl,
  duration,
  courseLevel,
  numOfReviews,
}) => {
  return (
    <div className="p-4 bg-slate-800 rounded-lg">
      <img
        src={coverImageUrl}
        alt={title}
        className="w-full rounded-lg mb-4"
        width={414}
        height={246}
      />
      <div>
        <span className="bg-blue-500 px-2 py-1 rounded-sm text-sm text-slate-200">
          {courseLevel}
        </span>
        <Link to={`/courses/${id}`}>
          <h2 className="font-bold text-lg mt-4 mb-2">{title}</h2>
        </Link>
        <p className="line-clamp-2 text-sm text-slate-300 mb-8 text-justify">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between pt-8">
        <div className="flex items-center justify-center gap-1 bg-slate-700 text-sm text-slate-400 font-semibold px-3 py-1 rounded-lg">
          <LuClock8 className="w-4 h-4" />
          <p>{`${duration} ساعت`}</p>
        </div>
        <div className="flex items-center justify-center gap-1 bg-slate-700 text-sm text-slate-400 font-semibold px-3 py-1 rounded-lg">
          <MdOutlineRateReview className="w-4 h-4" />
          <p>{`${numOfReviews} نظر`}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
