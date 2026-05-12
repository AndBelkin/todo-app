import type { FC } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button } from "../../shared";
import "./NotFoundPage.css";

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoToBack = () => (location.key !== "default" ? navigate(-1) : navigate("/"));
  return (
    <main className="not-found-page">
      <div className="container">
        <div className="wrapper">
          <h2>400</h2>
          <h3>Page not found</h3>
        </div>
        <p>The link you clicked may be broken or the page may have been removed.</p>
        <Button onClick={handleGoToBack} view="accent">
          Go to Back
        </Button>
      </div>
    </main>
  );
};
