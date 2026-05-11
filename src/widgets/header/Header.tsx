import type { FC } from "react";
import { NavLink } from "react-router";
import "./Header.css";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <NavLink to="/" className="header-logo">
          TodoApp
        </NavLink>
        <nav className="header-nav">
          <NavLink to="/new" className="header-nav-item">
            Create
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
