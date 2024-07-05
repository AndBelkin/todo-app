import { FC } from "react";
import "../../styles/CreateItemsForm.css";
import { MdDelete } from "react-icons/md";

const CreateItemsForm: FC = () => {
  return (
    <div className="create-items-form">
      <div className="wrapper">
        <button className="cancel-button">Отмена</button>
        <p className="title">Создать задачу</p>
        <button className="save-button">Сохранить</button>
      </div>
      <div className="create-items-form-input">
        <input type="text" className="input" placeholder="Создать задачу" />
        <MdDelete className="input-delete" />
      </div>
    </div>
  );
};

export default CreateItemsForm;
