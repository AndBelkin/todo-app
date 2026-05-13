import { Route, Routes } from "react-router";
import { CreatePage, IndexPage, NotFoundPage } from "../../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/new" element={<CreatePage />} />
      <Route path="/item/:id">
        <Route index element={<p>Show TodoItem</p>} />
        <Route path="edit" element={<p>Edit TodoItem</p>} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
