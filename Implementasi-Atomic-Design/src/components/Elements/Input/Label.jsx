/* eslint-disable react/prop-types */
const Label = (props) => {
  const { htmlFor, children } = props;
  return (
    <label className="block my-2" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
