import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./main.css";
import store from "./store/store";

import { createBrowserRouter, RouterProvider } from "react-router";

const { VITE_ADMIN_ROUTE } = import.meta.env;

// Layout
import Layout from "./layouts/MainLayout";
import AccountLayout from "./layouts/AccountLayout";
import AdminLayout from "./layouts/AdminLayout";

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
import ShoppingCartPage from "./pages/ShoppingCartPage";
import CheckoutPage from "./pages/CheckoutPage";

// ADMIN PAGE
import Dashboard from "./pages/Admin/Dashboard";

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
      { path: "cart", element: <ShoppingCartPage /> },
      {
        path: VITE_ADMIN_ROUTE,
        element: <AdminLayout />,
        children: [{ index: true, element: <Dashboard /> }],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
