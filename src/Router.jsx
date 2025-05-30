import { createBrowserRouter } from "react-router-dom";
import { Main } from "./pages/main/Main";
import Roots from "./pages/Roots";
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
        path: "books/:id",
        element: <BookDetailPage />,
      },
    ],
  },
]);

export default router;
