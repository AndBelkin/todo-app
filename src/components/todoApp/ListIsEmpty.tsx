import { FC } from "react";
import { RiFileList3Line } from "react-icons/ri";

const ListIsEmpty: FC = () => {
  return (
    <>
      <RiFileList3Line className="main-no-task" />
      <p>Список пуст!</p>
    </>
  );
};

export default ListIsEmpty;
