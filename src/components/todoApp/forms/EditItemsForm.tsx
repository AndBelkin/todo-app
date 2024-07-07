import { FC, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import {
  changeAppMode,
  Todos,
  updateItem,
} from "../../../app/feature/todoApp/todoAppSlice";
import InputCustom from "../InputCustom";
import CancelButton from "../buttons/CancelButton";
import SaveButton from "../buttons/SaveButton";
import "../../../styles/CreateItemsForm.css";

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
  const keyDownHandler = (key: string) => {
    if (key === "Enter") clickHandler();
    else if (key === "Escape") dispatch(changeAppMode("none"));
  };
  return (
    <div className="create-items-form">
      <div className="wrapper">
        <CancelButton onClick={() => dispatch(changeAppMode("none"))} />
        <p className="title">Изменить задачу</p>
        <SaveButton isHide={input ? false : true} onClick={clickHandler} />
      </div>
      <div className="create-items-form-input">
        <InputCustom
          placeholder=""
          value={input}
          onKeyDown={(e) => keyDownHandler(e.code)}
          onChange={(e) => setInput(e.target.value)}
          delEvent={() => setInput("")}
        />
      </div>
    </div>
  );
};

export default EditItemsForm;
