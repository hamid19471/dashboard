import { createBrowserRouter } from "react-router-dom";
import Login from "./features/indentity/login";
import Register from "./features/indentity/register";
import IdentityLayout from "./layout/identity-layout";
import { loginActionForm } from "./actions/loginActionForm";
import { registerActionForm } from "./actions/registerActionForm";
import MainLayout from "./layout/main-layout/main-layout";
import Courses from "./pages/courses";
import CourseCategories from "./pages/course-categories";
import CourseDetails from "./features/courses/component/course-details";
import { loadCategories } from "./features/data-loader/categories-loader";
import { loadCourseDetails } from "./features/data-loader/course-details-loader";
import { CourseLoader } from "./features/data-loader/course-loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Courses />,
        loader: CourseLoader,
      },
      {
        path: "course-categories",
        element: <CourseCategories />,
        loader: loadCategories,
      },
      {
        path: "courses/:id",
        element: <CourseDetails />,
        loader: loadCourseDetails,
      },
    ],
  },
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginActionForm,
      },
      {
        path: "register",
        element: <Register />,
        action: registerActionForm,
      },
    ],
  },
]);

export default router;
