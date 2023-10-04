import AuthLayout from "./components/Layouts/AuthLayouts";

function App() {
  return (
    <>
      <div className="flex items-center flex-col justify-center min-h-screen bg-[#6d9ac4]">
        <AuthLayout
          hading="sign up"
          title="Already a user?"
          condition="login"
        />
      </div>
    </>
  );
}

export default App;
