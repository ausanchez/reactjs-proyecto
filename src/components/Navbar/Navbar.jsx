import React from "react";
import Form from "../Form/Form";
import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
      </ul>
      <CartWidget/>
      <Form contBuscar = 'Productos'/>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;