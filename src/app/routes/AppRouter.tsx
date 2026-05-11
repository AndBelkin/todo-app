import { Route, Routes } from "react-router";
import { IndexPage } from "../../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
    </Routes>
  );
};
