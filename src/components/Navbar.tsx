import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="fixed bottom-0 flex min-h-[4rem] w-full items-center justify-center gap-10 bg-base-300 px-20 sm:bottom-auto sm:top-0">
        <Link to="/" className="btn btn-primary rounded-full">
          Home
        </Link>
        <Link to="about" className="btn btn-primary rounded-full">
          About
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
