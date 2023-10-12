import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import SignupPage from "./pages/signup.jsx";
import ErrorPage from "./pages/error.jsx";
import Product from "./pages/product.jsx";
import Counter from "./pages/Counter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
