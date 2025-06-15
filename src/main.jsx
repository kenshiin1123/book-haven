import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import { createBrowserRouter, RouterProvider } from "react-router";

// Layout
import Layout from "./Layouts/Layout";
import AccountLayout from "./Layouts/AccountLayout";

// Pages
import Homepage from "./pages/Homepage";
import BooksPage from "./pages/BooksPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AccountPage from "./pages/Account Page/AccountPage";
import ProfilePage from "./pages/Account Page/ProfilePage";
import PurchasesPage from "./pages/Account Page/PurchasesPage";
import SettingsPage from "./pages/Account Page/SettingsPage";
import ShoppingCart from "./pages/ShoppingCart";
import CheckoutPage from "./pages/CheckoutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "books", element: <BooksPage /> },
      { path: "books/:bookId", element: <BookDetailsPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
      {
        path: "account",
        element: <AccountLayout />,
        children: [
          { index: true, element: <AccountPage /> },
          { path: "profile", element: <ProfilePage /> },
          { path: "purchases", element: <PurchasesPage /> },
          { path: "settings", element: <SettingsPage /> },
        ],
      },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "/cart", element: <ShoppingCart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
