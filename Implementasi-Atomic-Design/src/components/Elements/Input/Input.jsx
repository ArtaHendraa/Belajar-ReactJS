/* eslint-disable react/prop-types */
const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="w-full py-2 pl-2 border rounded-lg text-md placeholder:opacity-50 focus:outline-none border-neutral-300"
    />
  );
};

export default Input;
