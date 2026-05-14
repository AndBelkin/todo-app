import { Route, Routes } from "react-router";
import { IndexPage, NotFoundPage, TodoPage, ManageCategoriesPage } from "../../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
      <Route path="/item/:id">
        <Route index element={<TodoPage />} />
        <Route path="edit" element={<p>Edit TodoItem</p>} />
      </Route>
      <Route path="/manage-categories" element={<ManageCategoriesPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
