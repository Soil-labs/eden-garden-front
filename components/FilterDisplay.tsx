import { XIcon } from "@heroicons/react/outline";
import { ReactElement, useContext } from "react";
import { Members, Project, Team } from "../generated/graphql";
import { FiltersContext, ContextType } from "../pages";
import { Title } from "../types/Title";

interface Props {
  name: string;
  color: string;
  children: ReactElement;
}

function FilterDisplay({ name, color, children }: Props) {
  const { filters, setFilters } = useContext(FiltersContext);
  const _name = name as keyof ContextType["filters"];

  const handleDeleteFilter = (_id: string) => {
    const arrayToFilter: Array<Project | Team | Members | Title> =
      filters[_name];
    const newFiltersArray = arrayToFilter.filter((item) => {
      return item._id !== _id;
    });
    setFilters({
      ...filters,
      [_name]: newFiltersArray,
    });
  };

  return (
    <div className="inline">
      {!!filters[_name].length && children}
      {filters[_name].map((item, index) => (
        <span key={index} className="font-bold" style={{ color: color }}>
          {"title" in item && <span>{item.title}</span>}
          <div
            key={index}
            className="p-px rounded-full text-white inline-block ml-1 -mb-1 mr-2 cursor-pointer"
            style={{ backgroundColor: color }}
            onClick={() => handleDeleteFilter(item._id || "")}
          >
            <XIcon width={16} />
          </div>
        </span>
      ))}
    </div>
  );
}

export default FilterDisplay;
