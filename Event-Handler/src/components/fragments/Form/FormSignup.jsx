import Input from "../../elements/input/Input";
import Link from "../../elements/link/LinkText";
import Button from "../../elements/button/Button";
import Auth from "../../elements/auth/Auth";

const FormRegister = () => {
  return (
    <form action="" className="flex flex-col px-6 pb-7 gap-y-4">
      <div className="flex flex-col gap-4">
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Create password" />
        <Input type="password" placeholder="Confirm password" />
      </div>

      <Link
        text="Have a question?"
        href="https://artahendraa.github.io/"
        textColor="text-[#0171d3]"
      />
      <Button
        buttonColor="bg-[#0171d3]"
        buttonText="Signup"
        textColor="text-[#FFF]"
      />

      <Auth
        authText="Already have an account?"
        authLink="Login"
        textColor="text-sky-600"
        href="/login"
      />

      <div className="flex items-center justify-center">
        <span className="w-full border border-slate-200"></span>
        <span className="px-3 font-semibold text-slate-400">Or</span>
        <span className="w-full border border-slate-200"></span>
      </div>

      <Button
        buttonColor="bg-[#0171d3]"
        buttonText="Login with Facebook"
        textColor="text-[#FFF]"
      />

      <Button
        buttonColor="bg-[#f64344]"
        buttonText="Login with Google"
        textColor="text-[#FFF]"
      />
    </form>
  );
};

export default FormRegister;
