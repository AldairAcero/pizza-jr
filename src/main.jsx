import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./routes/Login";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./components/Home";
import NewOrder from "./components/NewOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage location="inicio sesion" />,
  },
  {
    path: "/pos",
    element: <Root></Root>,
    errorElement: <ErrorPage location="home" />,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "order",
        element: <NewOrder />,
      },
      {
        path: "administration",
        element: <h1>Administración</h1>,
      },
      {
        path: "cashBox",
        element: <h1>corte/abrir la caja</h1>,
      },
      {
        path: "products",
        element: <h1>productos</h1>,
      },
      {
        path: "sales",
        element: <h1>Ventas</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
