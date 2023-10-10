/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { text, children } = props;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-Montserrat gap-x-3 bg-neutral-200">
      <div className="w-full max-w-md bg-white rounded-xl">
        <h1 className="py-8 text-3xl font-semibold text-center">{text}</h1>
        {children}
      </div>
      <Link
        className="px-10 py-3 mt-10 font-semibold tracking-wider duration-200 rounded-md bg-sky-600 hover:bg-sky-500 text-neutral-200"
        to="/"
      >
        Home
      </Link>
    </div>
  );
};
export default AuthLayouts;
