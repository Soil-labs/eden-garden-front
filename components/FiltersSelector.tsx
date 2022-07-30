import { Fragment } from "react";
import { Member } from "../types/Member";
import { Project } from "../types/Project";
import { Team } from "../types/Team";
import { Title } from "../types/Title";
import FilterSelector from "./FilterSelector";

const filters = ["projects", "teams", "members", "titles"];
type Data = {
  name: string;
  options: Project[] | Team[] | Member[] | Title[];
};
const mockData: Data[] = [
  {
    name: "📁 projects",
    options: [{ _id: "1234", title: "project 1" }],
  },
  {
    name: "👥 teams",
    options: [{ _id: "1234", title: "team 1" }],
  },
  {
    name: "👤 members",
    options: [{ _id: "1234", title: "member 1" }],
  },
  {
    name: "📌 titles",
    options: [{ _id: "1234", title: "title 1" }],
  },
];
function FiltersSelector() {
  return (
    <div className="ml-auto">
      <div className="flex">
        {mockData.map((item, index) => (
          <FilterSelector name={item.name} options={item.options} key={index} />
        ))}
      </div>
    </div>
  );
}

export default FiltersSelector;
