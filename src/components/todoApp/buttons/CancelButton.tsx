import { FC } from "react";
import "../../../styles/Buttons.css";

interface CancelButtonProps {
  onClick: () => void;
}

const CancelButton: FC<CancelButtonProps> = ({
  onClick,
}: CancelButtonProps) => {
  return (
    <button className="cancel-button" onClick={onClick}>
      Отмена
    </button>
  );
};

export default CancelButton;
