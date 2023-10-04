/* eslint-disable react/prop-types */
import FormLogin from "../Fragments/FormLogin";

const AuthLayout = (props) => {
  const { hading, title, condition } = props;
  return (
    <div className="w-full max-w-md p-10 my-5 bg-white rounded-md shadow-lg">
      <h1 className="mb-5 font-semibold uppercase">{hading}</h1>
      <FormLogin />
      <div className="border mt-7 border-neutral-300"></div>
      <div className="mt-2 text-center">
        {title}
        <a href="" className="ml-1 underline uppercase">
          {condition}
        </a>
      </div>
    </div>
  );
};

export default AuthLayout;
