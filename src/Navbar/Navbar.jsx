import React from "react";
import { Link,  } from "react-router-dom";


export const Navbar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
      <Link to="/">Inicio</Link>
      <Link to="/Tarjeta">Tarjeta pokemon</Link>
      <Link to="/InfoCv">Formulario cv</Link>
    </nav>
  );
  
}

export default Navbar;