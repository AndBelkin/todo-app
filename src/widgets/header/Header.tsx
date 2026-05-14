import type { FC } from "react";
import { NavLink } from "react-router";
import "./Header.css";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <NavLink to="/" className="header-logo">
          Reminder
        </NavLink>
        <nav className="header-nav">
          <NavLink to="/#" className="header-nav-item">
            Sort by
          </NavLink>
          <NavLink to="/manage-categories" className="header-nav-item">
            Manage categories
          </NavLink>
          <NavLink to="/#" className="header-nav-item">
            Trash
          </NavLink>
          <NavLink to="/#" className="header-nav-item">
            Setting
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
