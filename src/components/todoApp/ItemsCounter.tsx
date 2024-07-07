import { FC } from "react";

interface ItemsCounterProps {
  count: number;
}

const getCase = (number: number) => {
  if (number === 1) return "задача";
  else if (number > 1 && number < 5) return "задачи";
  else return "задач";
};

const ItemsCounter: FC<ItemsCounterProps> = ({ count }: ItemsCounterProps) => {
  return (
    count > 0 && (
      <p className="header-subtitle">
        {count} {getCase(count)}
      </p>
    )
  );
};

export default ItemsCounter;
