/* eslint-disable react/no-unescaped-entities */
import AuthLayouts from "./components/layouts/AuthLayouts";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-400 font-Montserrat gap-x-3">
      <AuthLayouts text="Login" />
      <AuthLayouts text="Login" />
      <AuthLayouts text="Login" />
    </div>
  );
}

export default App;
