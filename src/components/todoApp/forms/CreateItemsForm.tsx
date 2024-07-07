import { FC, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import {
  addNewItem,
  changeAppMode,
  Todos,
} from "../../../app/feature/todoApp/todoAppSlice";
import CancelButton from "../buttons/CancelButton";
import SaveButton from "../buttons/SaveButton";
import InputCustom from "../InputCustom";
import "../../../styles/CreateItemsForm.css";

const CreateItemsForm: FC = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    if (input) {
      const newItem: Todos = { id: Math.random(), title: input, isDone: false };
      dispatch(addNewItem(newItem));
      dispatch(changeAppMode("none"));
    }
  };
  const keyDownHandler = (key: string) => {
    if (key === "Enter") clickHandler();
    else if (key === "Escape") dispatch(changeAppMode("none"));
  };
  return (
    <div className="create-items-form">
      <div className="wrapper">
        <CancelButton onClick={() => dispatch(changeAppMode("none"))} />
        <p className="title">Создать задачу</p>
        <SaveButton isHide={input ? false : true} onClick={clickHandler} />
      </div>
      <div className="create-items-form-input">
        <InputCustom
          placeholder={"Создать задачу"}
          value={input}
          onKeyDown={(e) => keyDownHandler(e.code)}
          onChange={(e) => setInput(e.target.value)}
          delEvent={() => setInput("")}
        />
      </div>
    </div>
  );
};

export default CreateItemsForm;
