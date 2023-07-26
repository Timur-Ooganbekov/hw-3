import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <NavLink to="">Посты</NavLink>
      <NavLink to="/create">Добавить пост</NavLink>
      <Outlet />
    </div>
  );
};

export default Layout;
