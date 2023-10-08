/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LinkText = (props) => {
  const { text, textColor, href } = props;
  return (
    <Link
      className={`"block mx-auto text-xs text-center ${textColor}`}
      to={href}
    >
      {text}
    </Link>
  );
};
export default LinkText;
