/* eslint-disable react/prop-types */
const Button = (props) => {
  const { buttonText, buttonColor, textColor } = props;
  return (
    <button className={`${buttonColor} w-full h-11 rounded-md ${textColor}`}>
      {buttonText}
    </button>
  );
};
export default Button;
