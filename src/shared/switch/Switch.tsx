import { type FC } from "react";
import "./Switch.css";

interface SwitchProps {
  active: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export const Switch: FC<SwitchProps> = ({ active, onClick, disabled }) => {
  const switchClass = ["switch-container", active ? "switch_on" : "switch_off", disabled && "disabled"].join(" ");
  return (
    <div className={switchClass} onClick={!disabled ? onClick : undefined}>
      <div className="switch-ball" />
    </div>
  );
};
