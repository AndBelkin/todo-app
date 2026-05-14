import { useState, type ChangeEvent } from "react";
import { useTodoStore } from "../../entities";

export const useNewTodo = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const { create } = useTodoStore();
  const inputBoxClass = ["form-input-box", isFocus ? "focus" : ""].join(" ");
  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);
  const onSubmit = (e: React.SubmitEvent) => e.preventDefault();
  const handleCreate = () => {
    if (!title) return false;
    create({ title, completed: false });
    setTitle("");
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
  const onKeyDown = (event: React.KeyboardEvent) => (event.key === "Enter" ? handleCreate() : false);
  return { title, inputBoxClass, onFocus, onBlur, onSubmit, onKeyDown, handleChange, handleCreate };
};
