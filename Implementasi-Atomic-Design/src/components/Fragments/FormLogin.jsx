import InputForm from "../Elements/Input";
import Button from "../Elements/Button/Button";

const FormLogin = () => {
  return (
    <form>
      <InputForm
        label="Email"
        type="text"
        placeholder="example@mail.com"
        name="email"
      />

      <InputForm
        label="Password"
        type="text"
        placeholder="Enter your password"
        name="Password"
      />
      <Button name="sign in" />
    </form>
  );
};

export default FormLogin;
