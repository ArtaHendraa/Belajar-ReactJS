/* eslint-disable react/prop-types */
const Input = (props) => {
  const { type, placeholder } = props;
  return (
    <input
      className="h-10 px-2 text-sm border-2 rounded-md focus:outline-none border-slate-300"
      type={type}
      placeholder={placeholder}
    />
  );
};
export default Input;
