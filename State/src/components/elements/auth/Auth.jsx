import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Auth = (props) => {
  const { authText, authLink, textColor, href } = props;
  return (
    <span className="flex items-center justify-center gap-2 text-xs">
      {authText}
      <Link to={href} className={`${textColor}`}>
        {authLink}
      </Link>
    </span>
  );
};
export default Auth;
