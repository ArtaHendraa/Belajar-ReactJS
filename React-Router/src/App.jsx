/* eslint-disable react/no-unescaped-entities */
import Button from "./components/elements/button/Button";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-400 font-Montserrat">
      <div className="w-full max-w-md bg-white rounded-xl">
        <h1 className="py-8 text-3xl font-semibold text-center">Login</h1>
        <form action="" className="flex flex-col px-6 pb-7 gap-y-4">
          <div className="flex flex-col gap-4">
            <input
              className="h-10 px-2 text-sm border-2 rounded-md focus:outline-none border-slate-300"
              type="text"
              placeholder="Email"
            />
            <input
              className="h-10 px-2 text-sm border-2 rounded-md focus:outline-none border-slate-300"
              type="text"
              placeholder="Password"
            />
          </div>

          <a
            className="block mx-auto text-xs text-center text-[#0171d3]"
            href=""
          >
            Forgot password?
          </a>
          <Button
            buttonColor="bg-[#0171d3]"
            buttonText="Login"
            textColor="text-[#FFF]"
          />

          <span className="flex items-center justify-center gap-2 text-xs">
            Don't have an account?
            <a href="" className="text-[#0171d3]">
              Signup{" "}
            </a>
          </span>

          <div className="flex items-center justify-center ">
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
      </div>
    </div>
  );
}

export default App;
