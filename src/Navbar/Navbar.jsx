import React from "react";
import { Link,  } from "react-router-dom";
import Tarjeta from "../Tarjetas/Tarjetas";
const Navbar = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
  },
];

export default Navbar;