import { defer } from "react-router-dom";
import { authHttpService } from "../../core/httpService";

export const loadCategories = async ({ request }) => {
  return defer({ categories: loadCategoriesData(request) });
};

const loadCategoriesData = async (request) => {
  const pages = new URL(request.url).searchParams.get("page") || 1;
  const pageSize = import.meta.env.VITE_PAGE_SIZE;
  let url = `/CourseCategory/sieve?page=${pages}&pageSize=${pageSize}`;
  const response = await authHttpService.get(url);
  return response.data;
};
