import { createBrowserRouter } from "react-router-dom";
import { Main } from "./pages/main/Main";
import Roots from "./pages/Roots";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "",
        element: <Main />,
      },
    ],
  },
]);

export default router;
