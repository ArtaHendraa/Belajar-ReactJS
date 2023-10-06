/* eslint-disable react/no-unescaped-entities */
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-400 font-Montserrat gap-x-3">
      <LoginPage />
      <RegisterPage />
    </div>
  );
}

export default App;
