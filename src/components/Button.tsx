import { twMerge } from "tailwind-merge";
import { SelectionInfo } from "../constants/selections";
import { getHouseSelected } from "../helpers";

interface ButtonProps {
  selection: SelectionInfo;
  setUserSelected?: (selection: SelectionInfo) => void;
  setHouseSelected?: (selection: SelectionInfo) => void;
}

const Button: React.FC<ButtonProps> = ({
  selection,
  setUserSelected,
  setHouseSelected,
}) => {
  const handleUserSelected = () => {
    if (setUserSelected) {
      setUserSelected(selection);
    }
    if (setHouseSelected) {
      const selected = getHouseSelected();
      setHouseSelected(selected);
    }
  };
  return (
    <button
      className={twMerge("group relative w-[150px] h-[150px] md:w-[160px] md:h-[160px] z-10 flex justify-center items-center rounded-full",`${selection.className} ${selection.position}`)}
      onClick={handleUserSelected}
    >
      <div className="w-[75%] h-[75%] bg-white rounded-full flex justify-center items-center shadow-lg shadow-DarkText group-hover:shadow-md">
        <img src={selection.icon} alt={selection.name} className="w-12 h-12" />
      </div>
    </button>
  );
};
export default Button;
