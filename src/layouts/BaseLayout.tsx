import { Outlet } from "react-router";

import Navbar from "../components/Navbar";

const BaseLayout = () => {
  return (
    <>
      <div className="bg-base-100 flex h-screen w-screen flex-col items-center justify-center">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default BaseLayout;
