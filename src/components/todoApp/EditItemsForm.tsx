import { FC, useState } from "react";
import "../../styles/CreateItemsForm.css";
import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "../../app/hooks";
import {
  changeAppMode,
  Todos,
  updateItem,
} from "../../app/feature/todoApp/todoAppSlice";

interface EditItemsFormProps {
  item: Todos;
}

const EditItemsForm: FC<EditItemsFormProps> = ({
  item,
}: EditItemsFormProps) => {
  const [input, setInput] = useState<string>(item.title);
  const styleSaveButton = input ? { opacity: "100%" } : { opacity: "50%" };
  const dispatch = useAppDispatch();
  const clickHandler = () => {
    if (input) {
      dispatch(updateItem({ ...item, title: input }));
      dispatch(changeAppMode("none"));
    }
  };
  return (
    <div className="create-items-form">
      <div className="wrapper">
        <button
          className="cancel-button"
          onClick={() => dispatch(changeAppMode("none"))}
        >
          Отмена
        </button>
        <p className="title">Изменить задачу</p>
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
          placeholder="Изменить задачу"
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

export default EditItemsForm;
