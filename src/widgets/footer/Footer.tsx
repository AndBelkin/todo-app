import type { FC } from "react";
import "./Footer.css";
import { Link } from "react-router";
import { FiGithub } from "react-icons/fi";
import { RiGitRepositoryLine } from "react-icons/ri";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-nav">
          <Link
            to="https://github.com/AndBelkin"
            target="_blank"
            title="Go to the GitHub profile"
            className="footer-nav-item"
          >
            <FiGithub />
            <span>GitHub</span>
          </Link>
          <Link
            to="https://github.com/AndBelkin/todo-app"
            target="_blank"
            title="Go to the repository"
            className="footer-nav-item"
          >
            <RiGitRepositoryLine />
            <span>GitHub Repository</span>
          </Link>
        </nav>
        <p className="footer-copyright">Copyright © 2026 TodoApp by AndBelkin.</p>
      </div>
    </footer>
  );
};
