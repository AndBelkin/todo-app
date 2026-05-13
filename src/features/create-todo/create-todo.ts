import { useState, type ChangeEvent } from "react";
import { useTodoStore } from "../../entities";
import { useNavigate } from "react-router";

export const useCreateTodo = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [errorMSG, setErrorMSG] = useState<string | null>(null);
  const { create } = useTodoStore();
  const handleCreate = () => {
    if (!title) {
      setErrorMSG("The Title field cannot be empty!");
    } else {
      setErrorMSG(null);
      create({ title, completed: false });
      navigate("/");
    }
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value);
  return { title, errorMSG, handleChange, handleCreate };
};
