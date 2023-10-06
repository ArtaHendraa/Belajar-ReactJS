/* eslint-disable react/prop-types */
const Auth = (props) => {
  const { authText, authLink, textColor, href } = props;
  return (
    <span className="flex items-center justify-center gap-2 text-xs">
      {authText}
      <a href={href} target="black" className={`${textColor}`}>
        {authLink}
      </a>
    </span>
  );
};
export default Auth;
