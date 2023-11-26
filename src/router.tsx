import { createBrowserRouter } from "react-router-dom";

// Layouts
import BaseLayout from "./layouts/BaseLayout";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
