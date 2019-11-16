import React from "react";

function NavItem({ name }) {
  return (
    <a className="p-5 border-b shadow-md" href="/">
      {name}
    </a>
  );
}

function Sidenav() {
  return (
    <div className="sidenav flex-col shadow-md hidden md:flex">
      <NavItem name="Dashboard"></NavItem>
      <NavItem name="Películas">></NavItem>
      <NavItem name="Turnos">></NavItem>
      <NavItem name="Administradores">></NavItem>
      <NavItem name="Perfil">></NavItem>
      <NavItem name="Cerrar sesión"></NavItem>
    </div>
  );
}

export default Sidenav;
