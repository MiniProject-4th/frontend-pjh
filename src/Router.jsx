import { createBrowserRouter } from "react-router-dom";
import { Main } from "./pages/main/Main";
import Roots from "./pages/Roots";
import NewBook from "./pages/newbook/NewBook";
import Edit from "./pages/edit/Edit";
import BookDetailPage from "./pages/bookDetail/BookDetailPage";

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
      },
      {
        path: "books/:id",
        element: <BookDetailPage />,
      },
    ],
  },
]);

export default router;
