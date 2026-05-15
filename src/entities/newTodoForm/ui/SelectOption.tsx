import type { FC } from "react";

import { useTodoStore } from "../../todo/model/slice";
import { Button } from "../../../shared";
import { CategoryItem } from "../../../shared/category/CategoryItem";
import type { SelectBoxProps, SelectOptionProps } from "../models/types";
import { SelectOptions } from "../lib/utils";

export const SelectOption: FC<SelectOptionProps> = ({ selectedIdx, onClick }) => {
  return (
    <div className="form-buttons-box">
      {SelectOptions.map((item) => {
        const Icon = item.icon;
        const style = [`form-button-icon`, selectedIdx === item.idx ? "selected" : ""].join(" ");
        return <Icon className={style} onClick={() => onClick(item.idx)} />;
      })}
    </div>
  );
};

export const SelectCalendar: FC = () => {
  return <div className="form-select-params">Select Calendar</div>;
};

export const SelectLocation: FC = () => {
  return <div className="form-select-params">Select Location</div>;
};

export const SelectCategoty: FC<SelectBoxProps> = ({ item, onChange }) => {
  const { categories } = useTodoStore();
  return (
    <div>
      <div className="form-select-params">
        {item.categoryID ? <CategoryItem id={item.categoryID} /> : <p>No category</p>}
        <div className="category-list">
          {categories.map((cat) => (
            <Button view="none" onClick={() => onChange(cat.id)}>
              <CategoryItem id={cat.id} size="small" key={cat.id} />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
