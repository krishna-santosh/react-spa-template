import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-extralight md:text-6xl">Page Not Found</h1>
      <Link to="/" className="btn btn-primary btn-lg">
        Back to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
