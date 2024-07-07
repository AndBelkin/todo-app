import { FC } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useAppSelector } from "../../../app/hooks";
import "../../../styles/Buttons.css";

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: FC<AddButtonProps> = ({ onClick }: AddButtonProps) => {
  const appMode = useAppSelector((state) => state.todoApp.appMode);
  return (
    appMode === "none" && (
      <IoIosAddCircle className="add-button" onClick={onClick} />
    )
  );
};

export default AddButton;
