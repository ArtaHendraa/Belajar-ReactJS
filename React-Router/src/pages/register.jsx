import FormRegister from "../components/fragments/FormLogin/FormSignup";
import AuthLayouts from "../components/layouts/AuthLayouts";
const RegisterPage = () => {
  return (
    <AuthLayouts text="Signup">
      <FormRegister />
    </AuthLayouts>
  );
};
export default RegisterPage;
