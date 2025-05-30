import { createBrowserRouter } from "react-router-dom";
import { Main } from "./pages/main/Main";
import Roots from "./pages/Roots";
import NewBook from "./pages/newbook/NewBook";
import Edit from "./pages/edit/Edit";


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
    {
      path: "books/edit/:bookid",
      element: <Edit />,
    }
    ],
  },
]);

export default router;
