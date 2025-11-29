import "./index.css";
import App from "./App";
import React from "react";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { AuthLayout } from "./Components";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  DashBoardPage,
  HomePage,
  LoginPage,
  RegisterPage,
  ReportIssuePage,
} from "./Pages";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "/register",
        element: (
          <AuthLayout authentication={false}>
            <RegisterPage />
          </AuthLayout>
        ),
      },
      {
        path: "/report-issue",
        element: (
          <AuthLayout>
            <ReportIssuePage />
          </AuthLayout>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <AuthLayout>
            <DashBoardPage />
          </AuthLayout>
        ),
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
