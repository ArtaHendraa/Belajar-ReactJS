/* eslint-disable react/prop-types */
const Button = (props) => {
  const { buttonText, buttonColor, textColor, onClick } = props;
  return (
    <button
      className={`${buttonColor} w-full h-11 rounded-md ${textColor}`}
      type="submit"
      onClick={() => onClick()}
    >
      {buttonText}
    </button>
  );
};
export default Button;
