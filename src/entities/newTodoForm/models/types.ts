import type { TodoCreateDate } from "../../todo/model/types";

export interface SelectOptionProps {
  selectedIdx: number | null;
  onClick: (idx: number) => void;
}

export interface SelectBoxProps {
  item: TodoCreateDate;
  onChange: (event: string) => void;
}
