/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-Montserrat gap-x-3 bg-neutral-200">
      <h1 className="text-5xl font-semibold">Welcome</h1>
      <div className="flex flex-col items-center justify-center gap-5 mt-5">
        <div className="flex items-center justify-center gap-5">
          <Link
            className="px-10 py-3 font-semibold tracking-wider duration-200 rounded-md bg-sky-600 hover:bg-sky-500 text-neutral-200"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="px-10 py-3 font-semibold tracking-wider duration-200 rounded-md bg-sky-600 hover:bg-sky-500 text-neutral-200"
            to="/signup"
          >
            SignUp
          </Link>
        </div>

        <div className="flex items-center justify-center gap-5">
          <Link
            className="px-10 py-3 font-semibold tracking-wider duration-200 rounded-md bg-sky-600 hover:bg-sky-500 text-neutral-200"
            to="/error"
          >
            Error Page
          </Link>

          <Link
            className="px-10 py-3 font-semibold tracking-wider duration-200 rounded-md bg-sky-600 hover:bg-sky-500 text-neutral-200"
            to="/product"
          >
            Product Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
