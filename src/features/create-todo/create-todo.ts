import { useState, type ChangeEvent } from "react";
import { useTodoStore, type TodoCreateDate } from "../../entities";

const initNewTodo = { title: "", completed: false, categoryID: null };

export const useNewTodo = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<TodoCreateDate>(initNewTodo);
  const { create } = useTodoStore();
  const inputBoxClass = ["form-input-box", isFocus ? "focus" : ""].join(" ");
  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);
  const onSubmit = (e: React.SubmitEvent) => e.preventDefault();
  const handleCreate = () => {
    if (!newTodo.title) return false;
    create(newTodo);
    setNewTodo(initNewTodo);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setNewTodo({ ...newTodo, title: event.target.value });
  const onKeyDown = (event: React.KeyboardEvent) => (event.key === "Enter" ? handleCreate() : false);
  const handleSelectCategory = (id: string) =>
    newTodo.categoryID === id
      ? setNewTodo({ ...newTodo, categoryID: null })
      : setNewTodo({ ...newTodo, categoryID: id });
  return {
    newTodo,
    inputBoxClass,
    onFocus,
    onBlur,
    onSubmit,
    onKeyDown,
    handleChange,
    handleCreate,
    handleSelectCategory,
  };
};
