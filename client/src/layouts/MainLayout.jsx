import { Outlet, useLoaderData, useSubmit } from "react-router";

import TopBar from "../components/layout/TopBar/TopBar";
import MainFooter from "../components/layout/MainFooter";
import { Toaster } from "sonner";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getTokenDuration } from "../utils/auth";

export default function Layout() {
  const token = useLoaderData();
  const darkTheme = useSelector((state) => state.user.preferences.darkTheme);
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      return;
    }

    const tokenExpiration = getTokenDuration();

    setTimeout(() => {
      submit(null, { method: "POST", action: "/logout" });
    }, tokenExpiration);
  }, [token, submit]);

  useEffect(() => {
    if (darkTheme) {
      document.querySelector("body").classList.add("dark");
    } else {
      document.querySelector("body").classList.remove("dark");
    }
  });

  return (
    <>
      <TopBar />
      <Outlet />
      <MainFooter />
      <Toaster />
    </>
  );
}
