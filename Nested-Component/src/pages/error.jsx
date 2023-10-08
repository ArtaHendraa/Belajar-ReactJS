import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-Montserrat gap-x-3 bg-neutral-200">
      <h1 className="font-bold text-9xl text-slate-800">404</h1>
      <h1 className="flex gap-1 text-xl font-semibold text-neutral-600">
        Page Not Found
        <Link to="/" className="duration-300 text-sky-700 hover:text-sky-900">
          Go Back
        </Link>
      </h1>
    </div>
  );
};
export default ErrorPage;
