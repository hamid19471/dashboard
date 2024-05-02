import { defer } from "react-router-dom";
import { authHttpService } from "../../core/httpService";

export const loadCourseDetails = async ({ params }) => {
  return defer({ courseDetail: loadCourseDetail(params.id) });
};

export const loadCourseDetail = async (id) => {
  const response = await authHttpService.get(`/Course/by-id/${id}`);
  return response.data;
};
