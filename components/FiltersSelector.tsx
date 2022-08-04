import { Fragment, useCallback, useContext, useState } from "react";
import { Members } from "../generated/graphql";
import { FiltersContext } from "../pages";
import { Project } from "../generated/graphql";
import { Team } from "../generated/graphql";
import { Title } from "../types/Title";
import FilterSelector from "./FilterSelector";

type Data = {
  title: string;
  name: string;
  options: Project[] | Team[] | Members[] | Title[];
};

function FiltersSelector() {
  const { filtersData } = useContext(FiltersContext);
  const _filtersData: Data[] = [
    {
      title: "📁 projects",
      name: "projects",
      options: filtersData?.projects || [],
    },
    { title: "👥 teams", name: "teams", options: filtersData?.teams || [] },
    {
      title: "👤 members",
      name: "members",
      options: filtersData?.members || [],
    },
    { title: "📌 titles", name: "titles", options: filtersData?.titles || [] },
  ];
  const [activeTab, setActiveTab] = useState<Number | null>(null);
  const setActiveTabCallback = useCallback(
    (tab: Number | null) => {
      setActiveTab(() => (tab === activeTab ? null : tab));
    },
    [activeTab]
  );
  return (
    <div className="ml-auto">
      <div className="flex">
        {_filtersData.map((item, index) => (
          <FilterSelector
            key={index}
            name={item.name}
            title={item.title}
            options={item.options}
            index={index}
            active={activeTab === index}
            setActiveTabCallback={setActiveTabCallback}
          />
        ))}
      </div>
    </div>
  );
}

export default FiltersSelector;
