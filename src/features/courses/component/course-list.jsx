import CourseCard from "./course-card";

const CourseList = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-8 w-full">
      {courses.map((item) => (
        <div key={item.id}>
          <CourseCard {...item} />
        </div>
      ))}
    </div>
  );
};

export default CourseList;
