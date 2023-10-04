/* eslint-disable react/prop-types */
const Button = (props) => {
  const { name } = props;
  return (
    <button className="uppercase bg-[#ee5684] block w-full py-2 rounded-md mt-5 text-white font-semibold">
      {name}
    </button>
  );
};

export default Button;
