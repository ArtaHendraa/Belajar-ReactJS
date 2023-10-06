/* eslint-disable react/prop-types */
const Link = (props) => {
  const { text, textColor, href } = props;
  return (
    <a
      className={`"block mx-auto text-xs text-center ${textColor}`}
      href={href}
    >
      {text}
    </a>
  );
};
export default Link;
