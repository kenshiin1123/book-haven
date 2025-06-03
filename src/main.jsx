import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import { createBrowserRouter, RouterProvider } from "react-router";

// Layout
import Layout from "./Layout";

// Pages
import BooksPage from "./pages/BooksPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <BooksPage /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
