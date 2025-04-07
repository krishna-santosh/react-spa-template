import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="bg-base-300 fixed bottom-0 flex min-h-[4rem] w-full items-center justify-center gap-10 px-20 sm:top-0 sm:bottom-auto">
        <Link to="/" className="btn btn-neutral">
          Home
        </Link>
        <Link to="about" className="btn btn-neutral">
          About
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
