/* eslint-disable react/no-unescaped-entities */
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
          <button className="bg-[#0171d3] w-full h-11 rounded-md text-white">
            Login
          </button>

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

          <button className="bg-[#0171d3] w-full h-11 rounded-md text-white">
            Login with Facebook
          </button>

          <button className="w-full bg-transparent border-2 rounded-md text-slate-500 h-11 border-slate-300">
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
