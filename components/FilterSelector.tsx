import { Member } from "../types/Member";
import { Project } from "../types/Project";
import { Team } from "../types/Team";
import { Title } from "../types/Title";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useContext } from "react";
import { FiltersContext } from "../pages";

interface Props {
  name?: string;
  options: Project[] | Team[] | Member[] | Title[];
}
function FilterSelector({ name, options }: Props) {
  const { filters, setFilters } = useContext(FiltersContext);

  const handleSelectFilters = () => {
    setFilters({
      ...filters,
      projects: [...filters.projects, options[0]],
    });
  };
  return (
    <div className="h-12 px-4 flex justify-center items-center border-r last:border-none bg-white hover:bg-slate-200 first:rounded-l-full last:rounded-r-full drop-shadow-md cursor-pointer">
      <span onClick={handleSelectFilters}>{name}</span>
      <ChevronRightIcon width={14} />
    </div>
  );
}

export default FilterSelector;
