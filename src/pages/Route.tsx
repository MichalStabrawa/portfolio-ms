import { Outlet } from "react-router-dom";
import NavComponent from "../components/Navigation/NavComponent";

function RootLayout() {
  return (
    <>
      <NavComponent />
      <Outlet />
    </>
  );
}

export default RootLayout;
