import { createBrowserRouter } from "react-router-dom";
import Login from "./features/indentity/login";
import Register from "./features/indentity/register";
import IdentityLayout from "./layout/identity-layout";
import { loginActionForm } from "./actions/loginActionForm";
import { registerActionForm } from "./actions/registerActionForm";
import MainLayout from "./layout/main-layout";
import Courses from "./pages/courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Courses />,
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
