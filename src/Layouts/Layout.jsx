import { Outlet } from "react-router";

import TopBar from "../components/TopBar/TopBar";
import MainFooter from "../components/MainFooter";
import { Toaster } from "sonner";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Layout() {
  const darkTheme = useSelector((state) => state.user.preferences.darkTheme);

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
