import { FC } from "react";
import { MdDelete } from "react-icons/md";

interface InputCustomProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  delEvent: () => void;
}

const InputCustom: FC<InputCustomProps> = ({
  placeholder,
  value,
  onChange,
  onKeyDown,
  delEvent,
}: InputCustomProps) => {
  return (
    <div className="form-input">
      <input
        type="text"
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {value && <MdDelete className="input-delete" onClick={delEvent} />}
    </div>
  );
};

export default InputCustom;
