import FormRegister from "../components/fragments/Form/FormSignup";
import AuthLayouts from "../components/layouts/AuthLayouts";
const SignupPage = () => {
  return (
    <AuthLayouts text="Signup">
      <FormRegister />
    </AuthLayouts>
  );
};
export default SignupPage;
