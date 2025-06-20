import { Outlet } from "react-router";

import TopBar from "../components/TopBar/TopBar";
import MainFooter from "../components/MainFooter";
import { Toaster } from "sonner";

export default function Layout() {
  return (
    <>
      <TopBar />
      <Outlet />
      <MainFooter />
      <Toaster />
    </>
  );
}
