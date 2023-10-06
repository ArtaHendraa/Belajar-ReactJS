/* eslint-disable react/prop-types */

const AuthLayouts = (props) => {
  const { text, children } = props;
  return (
    <div className="w-full max-w-md bg-white rounded-xl">
      <h1 className="py-8 text-3xl font-semibold text-center">{text}</h1>
      {children}
    </div>
  );
};
export default AuthLayouts;
