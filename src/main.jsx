import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import { createBrowserRouter, RouterProvider } from "react-router";

// Layout
import Layout from "./Layout";

// Pages
import ProductsPage from "./pages/ProductsPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <ProductsPage /> }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
