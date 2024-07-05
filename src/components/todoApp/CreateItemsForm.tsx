import { FC, useState } from "react";
import "../../styles/CreateItemsForm.css";
import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "../../app/hooks";
import {
  addNewItem,
  changeOpen,
  Todos,
} from "../../app/feature/todoApp/todoAppSlice";

const CreateItemsForm: FC = () => {
  const [input, setInput] = useState<string>("");
  const styleSaveButton = input ? { opacity: "100%" } : { opacity: "50%" };
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    if (input) {
      const newItem: Todos = { id: Math.random(), title: input, isDone: false };
      dispatch(addNewItem(newItem));
      dispatch(changeOpen());
    }
  };
  return (
    <div className="create-items-form">
      <div className="wrapper">
        <button
          className="cancel-button"
          onClick={() => dispatch(changeOpen())}
        >
          Отмена
        </button>
        <p className="title">Создать задачу</p>
        <button
          className="save-button"
          onClick={clickHandler}
          style={styleSaveButton}
        >
          Сохранить
        </button>
      </div>
      <div className="create-items-form-input">
        <input
          type="text"
          className="input"
          placeholder="Создать задачу"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {input ? (
          <MdDelete className="input-delete" onClick={() => setInput("")} />
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default CreateItemsForm;
