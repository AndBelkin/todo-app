import { FC } from "react";
import "../../../styles/Buttons.css";

interface SaveButtonProps {
  isHide: boolean;
  onClick: () => void;
}

const SaveButton: FC<SaveButtonProps> = ({
  isHide,
  onClick,
}: SaveButtonProps) => {
  const buttonStyle = isHide ? { opacity: "50%" } : { opacity: "100%" };
  return (
    <button
      className="save-button"
      onClick={onClick}
      style={buttonStyle}
      disabled={isHide}
    >
      Сохранить
    </button>
  );
};

export default SaveButton;
