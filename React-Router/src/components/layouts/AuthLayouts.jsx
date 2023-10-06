/* eslint-disable react/prop-types */
import FormLogin from "../fragments/FormLogin/FormLogin";

const AuthLayouts = (props) => {
  const { text } = props;
  return (
    <div className="w-full max-w-md bg-white rounded-xl">
      <h1 className="py-8 text-3xl font-semibold text-center">{text}</h1>
      <FormLogin />
    </div>
  );
};
export default AuthLayouts;
