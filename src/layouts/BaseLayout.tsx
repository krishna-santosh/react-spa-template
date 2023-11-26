import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const BaseLayout = () => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center bg-base-100">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default BaseLayout;
