import { defer } from "react-router-dom";
import { authHttpService } from "../../../core/httpService";
export const CourseLoader = async () => {
  return defer({ courses: loadCourses() });
};

const loadCourses = async () => {
  const response = await authHttpService.get("/Course/list");
  return response.data;
};
