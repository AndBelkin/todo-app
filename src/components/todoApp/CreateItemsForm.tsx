import { FC, useState } from "react";
import "../../styles/CreateItemsForm.css";
import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "../../app/hooks";
import {
  addNewItem,
  changeAppMode,
  Todos,
} from "../../app/feature/todoApp/todoAppSlice";
import CancelButton from "./buttons/CancelButton";
import SaveButton from "./buttons/SaveButton";

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
  return (
    <div className="create-items-form">
      <div className="wrapper">
        <CancelButton onClick={() => dispatch(changeAppMode("none"))} />
        <p className="title">Создать задачу</p>
        <SaveButton isHide={input ? false : true} onClick={clickHandler} />
      </div>
      <div className="create-items-form-input">
        <input
          type="text"
          className="input"
          placeholder="Создать задачу"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {input && (
          <MdDelete className="input-delete" onClick={() => setInput("")} />
        )}
      </div>
    </div>
  );
};

export default CreateItemsForm;
