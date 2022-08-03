import { XIcon } from "@heroicons/react/outline";
import { ReactElement, useContext, useState } from "react";
import { FiltersContext, ContextType } from "../pages";
import Avatar from "./Avatar";

interface Props {
  name: string;
  color: string;
  useAvatars: boolean;
  children: ReactElement;
}

function FilterDisplayMember({ name, color, useAvatars, children }: Props) {
  const { filters, setFilters } = useContext(FiltersContext);
  const [selectedMember, setSelectedMember] = useState<any | null>(null);
  const _name = name as keyof ContextType["filters"];

  const handleDeleteFilter = () => {
    if (!selectedMember) return;

    const newFiltersArray = filters[_name].filter((item) => {
      return item._id !== selectedMember._id;
    });
    setFilters({
      ...filters,
      [_name]: newFiltersArray,
    });
    setSelectedMember(null);
  };

  return (
    <div className="inline">
      {!!filters[_name].length && children}
      <span>
        {filters[_name].map((item, index) => (
          <span
            key={index}
            className="font-bold last:mr-0 -mr-[8px] cursor-pointer"
            style={{ color: color }}
            onClick={() => {
              setSelectedMember(item);
            }}
          >
            <Avatar
              src="https://placeimg.com/300/300/any"
              border={selectedMember?._id === item._id ? color : "#fff"}
            />
          </span>
        ))}
      </span>
      {!!filters[_name].length && (
        <div
          className="p-px rounded-full text-white inline-block ml-1 -mb-1 mr-2 cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={handleDeleteFilter}
        >
          <XIcon width={16} />
        </div>
      )}
    </div>
  );
}

export default FilterDisplayMember;
