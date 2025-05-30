import { createBrowserRouter } from "react-router-dom";
import { Main } from "./pages/main/Main";
import Roots from "./pages/Roots";
import NewBook from "./pages/newbook/NewBook";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "books/new",
        element: <NewBook />,
      },
    ],
  },
]);

export default router;
