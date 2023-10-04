/* eslint-disable react/prop-types */
import Label from "./Label";
import Input from "./input";

const InputForm = (props) => {
  const { label, name, type, placeholder } = props;
  return (
    <div className="mb-8">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputForm;
