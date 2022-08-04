import { Members } from "../generated/graphql";
import { Project } from "../generated/graphql";
import { Team } from "../types/Team";
import { Title } from "../types/Title";
import {
  ChevronRightIcon,
  CheckCircleIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import { useContext, useState } from "react";
import { FiltersContext, ContextType } from "../pages";
import { handleClientScriptLoad } from "next/script";
import Avatar from "./Avatar";

interface Props {
  name: string;
  title?: string;
  options: Project[] | Team[] | Members[] | Title[];
  setActiveTabCallback: Function;
  index: Number;
  active: boolean;
}
function FilterSelector({
  name,
  title,
  options,
  setActiveTabCallback,
  index,
  active,
}: Props) {
  const { filters, setFilters } = useContext(FiltersContext);
  const _name = name as keyof ContextType["filters"];

  const hasProjectSelected = (id: string): boolean => {
    return filters[name as keyof ContextType["filters"]].some(
      (filter) => filter._id === id
    );
  };

  const handleSelectFilters = (e: any) => {
    let newFiltersArray;

    if (hasProjectSelected(e.target.value)) {
      const arrayToFilter: Array<Project | Team | Members | Title> =
        filters[_name];
      newFiltersArray = arrayToFilter.filter(
        (item: Project | Team | Members | Title) => {
          return item._id !== e.target.value;
        }
      );
    } else {
      const arrayToFilter: Array<Project | Team | Members | Title> = options;
      newFiltersArray = [
        ...filters[_name],
        arrayToFilter.find(
          (option: Project | Team | Members | Title) =>
            option._id === e.target.value
        ),
      ];
    }

    setFilters({
      ...filters,
      [_name]: newFiltersArray,
    });
  };
  return (
    <div className="h-12 border-r last:border-none bg-white hover:bg-slate-200 first:rounded-l-full last:rounded-r-full drop-shadow-md cursor-pointer">
      <div
        onClick={() => setActiveTabCallback(index)}
        className="flex justify-center items-center w-full h-full pl-4 pr-2"
      >
        <span className="mr-1">{title}</span>
        <ChevronRightIcon
          width={14}
          className={`${active ? "rotate-90" : ""}`}
        />
      </div>
      {active && (
        <fieldset className="absolute top-14 -right-2 p-1 bg-white rounded-md">
          {options.map((option, optionIdx) => (
            <label
              htmlFor={`option-${option._id}`}
              key={optionIdx}
              className="relative flex p-1 hover:bg-slate-800 text-gray-700 rounded-md cursor-pointer mb-px"
            >
              <div className="w-full flex justify-between items-center h-full hover:text-white">
                {option._id && (
                  <input
                    value={option._id}
                    id={`option-${option._id}`}
                    name={`option-${option._id}`}
                    type="checkbox"
                    checked={hasProjectSelected(option._id)}
                    className="absolute left-0 top-0 w-full h-full peer checked:bg-slate-800 appearance-none focus:ring-indigo-500 text-indigo-600 border-gray-300 rounded cursor-pointer"
                    onChange={handleSelectFilters}
                  />
                )}
                <div className="z-10 min-w-0 text-sm peer-checked:text-white">
                  <span className="font-medium cursor-pointer">
                    {"title" in option && <span>{option.title}</span>}
                    {"discordName" in option && (
                      <span>
                        <span className="mr-1">
                          <Avatar src={option.discordAvatar || ""} />
                        </span>
                        {option.discordName}
                      </span>
                    )}
                  </span>
                </div>
                <div
                  className={`z-10 ml-auto rounded-full invisible peer-checked:visible bg-green-400`}
                >
                  <CheckCircleIcon width={20} color="#fff" />
                </div>
              </div>
            </label>
          ))}
        </fieldset>
      )}
    </div>
  );
}

export default FilterSelector;
