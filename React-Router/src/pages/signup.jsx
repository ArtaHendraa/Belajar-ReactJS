import FormRegister from "../components/fragments/FormLogin/FormSignup";
import AuthLayouts from "../components/layouts/AuthLayouts";
const SignupPage = () => {
  return (
    <AuthLayouts text="Signup">
      <FormRegister />
    </AuthLayouts>
  );
};
export default SignupPage;
