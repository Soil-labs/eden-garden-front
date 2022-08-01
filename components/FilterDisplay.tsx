import { XIcon } from "@heroicons/react/outline";
import { ChangeEvent, Fragment, useContext } from "react";
import { FiltersContext, ContextType } from "../pages";
import { Member } from "../types/Member";
import { Project } from "../types/Project";
import { Team } from "../types/Team";
import { Title } from "../types/Title";

interface Props {
  name: string;
  color: string;
}

function FiltersDisplay({ name, color }: Props) {
  const { filters, setFilters } = useContext(FiltersContext);
  const _name = name as keyof ContextType["filters"];

  const handleDeleteFilter = (_id: string) => {
    const newFiltersArray = filters[_name].filter((item) => {
      return item._id !== _id;
    });
    setFilters({
      ...filters,
      [_name]: newFiltersArray,
    });
  };

  return (
    <div className="inline">
      {filters[_name].map((item, index) => (
        <span key={index} className="font-bold" style={{ color: color }}>
          {item.title}
          <div
            key={index}
            className="p-px rounded-full text-white inline-block ml-1 -mb-1 mr-2 cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={() => handleDeleteFilter(item._id)}
          >
            <XIcon width={16} />
          </div>
        </span>
      ))}
    </div>
  );
}

export default FiltersDisplay;
