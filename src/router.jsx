import { createBrowserRouter } from "react-router-dom";
import Login from "./features/indentity/login";
import Register from "./features/indentity/register";
import IdentityLayout from "./layout/identity-layout";

const router = createBrowserRouter([
  {
    element: <IdentityLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
