import { Fragment } from "react";
import { Member } from "../types/Member";
import { Project } from "../types/Project";
import { Team } from "../types/Team";
import { Title } from "../types/Title";
import FilterSelector from "./FilterSelector";

function FiltersSelector() {
  const filters = ["projects", "teams", "members", "titles"];
  type Data = {
    name: string;
    options: Project[] | Team[] | Member[] | Title[];
  };
  const mockData: Data[] = [
    {
      name: "projects",
      options: [{ _id: "1234", title: "project 1" }],
    },
  ];

  return (
    <div className="bg-bgGrey min-h-screen">
      {mockData.map((item, index) => (
        <FilterSelector name={item.name} options={item.options} key={index} />
      ))}
    </div>
  );
}

export default FiltersSelector;
