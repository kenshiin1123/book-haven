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
import RegisterPage, { action as registerAction } from "./pages/RegisterPage";
import LoginPage, { action as loginAction } from "./pages/LoginPage";
import AccountPage from "./pages/Account Page/AccountPage";
import ProfilePage from "./pages/Account Page/ProfilePage";
import PurchasesPage from "./pages/Account Page/PurchasesPage";
import SettingsPage from "./pages/Account Page/SettingsPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import CheckoutPage from "./pages/CheckoutPage";
import logoutAction from "./pages/LogoutPage";

// ADMIN PAGE
import Dashboard from "./pages/Admin/Dashboard";

import { checkAuthLoader, tokenLoader } from "./utils/auth";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: tokenLoader,
    children: [
      { index: true, element: <Homepage /> },
      { path: "books", element: <BooksPage /> },
      { path: "books/:bookId", element: <BookDetailsPage /> },
      { path: "register", element: <RegisterPage />, action: registerAction },
      { path: "login", element: <LoginPage />, action: loginAction },
      { path: "logout", action: logoutAction },
      {
        path: "account",
        element: <AccountLayout />,
        // The user must be authenticated before going in to this page.
        // The user will get redirected to the "/login" route if they're not authenticated.
        loader: checkAuthLoader,
        children: [
          { index: true, element: <AccountPage /> },
          { path: "profile", element: <ProfilePage /> },
          { path: "purchases", element: <PurchasesPage /> },
          { path: "settings", element: <SettingsPage /> },
        ],
      },
      { path: "checkout", element: <CheckoutPage />, loader: checkAuthLoader },
      { path: "cart", element: <ShoppingCartPage /> },
      // {
      //   path: VITE_ADMIN_ROUTE,
      //   element: <AdminLayout />,
      //   children: [{ index: true, element: <Dashboard /> loader: checkAuthLoader}],
      // },
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
