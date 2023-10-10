import FormLogin from "../components/fragments/FormLogin/FormLogin";
import AuthLayouts from "../components/layouts/AuthLayouts";
const LoginPage = () => {
  return (
    <AuthLayouts text="Login">
      <FormLogin />
    </AuthLayouts>
  );
};
export default LoginPage;
