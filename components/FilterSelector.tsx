import { Member } from "../types/Member";
import { Project } from "../types/Project";
import { Team } from "../types/Team";
import { Title } from "../types/Title";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { FiltersContext } from "../pages";

interface Props {
  name?: string;
  options: Project[] | Team[] | Member[] | Title[];
}
function FilterSelector({ name, options }: Props) {
  const { filters, setFilters } = useContext(FiltersContext);
  const [active, setActive] = useState(true);

  console.log("---->", options);

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
      {active && (
        <fieldset className="absolute top-14 w-28 p-1 bg-white rounded-md">
          {options.map((option, optionIdx) => (
            <div
              key={optionIdx}
              className="relative flex items-start p-1 hover:bg-slate-800 text-gray-700 hover:text-white rounded-md"
            >
              <div className="min-w-0 flex-1 text-sm">
                <label
                  htmlFor={`option-${option._id}`}
                  className="font-medium select-none"
                >
                  {option.title}
                </label>
              </div>
              <div className="ml-3 flex items-center h-5">
                <input
                  name={`option-${option._id}`}
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
              </div>
            </div>
          ))}
        </fieldset>
      )}
    </div>
  );
}

export default FilterSelector;
