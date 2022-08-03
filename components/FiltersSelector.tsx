import { Fragment, useCallback, useState } from "react";
import { Members } from "../generated/graphql";
import { Project } from "../types/Project";
import { Team } from "../types/Team";
import { Title } from "../types/Title";
import FilterSelector from "./FilterSelector";

type Data = {
  title: string;
  name: string;
  options: Project[] | Team[] | Members[] | Title[];
};

const mockData: Data[] = [
  {
    title: "📁 projects",
    name: "projects",
    options: [
      { _id: "1234", title: "project 1" },
      { _id: "12345", title: "project 2" },
    ],
  },
  {
    title: "👥 teams",
    name: "teams",
    options: [{ _id: "1", title: "team 1" }],
  },
  {
    title: "👤 members",
    name: "members",
    options: [
      { _id: "2", title: "member 1" },
      { _id: "3", title: "member 1" },
      { _id: "4", title: "member 1" },
    ],
  },
  {
    title: "📌 titles",
    name: "titles",
    options: [{ _id: "3", title: "title 1" }],
  },
];

function FiltersSelector() {
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
        {mockData.map((item, index) => (
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
