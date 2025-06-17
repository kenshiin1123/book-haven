import { Outlet } from "react-router";

import TopBar from "../components/TopBar/TopBar";
import MainFooter from "../components/MainFooter";

export default function Layout() {
  return (
    <>
      <TopBar />
      <Outlet />
      <MainFooter />
    </>
  );
}
