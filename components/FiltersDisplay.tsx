import { Fragment, useContext } from "react";
import { FiltersContext } from "../pages";
import { Member } from "../types/Member";
import { Project } from "../types/Project";
import { Team } from "../types/Team";
import { Title } from "../types/Title";
import FilterSelector from "./FilterSelector";

function FiltersDisplay() {
  const { filters, setFilters } = useContext(FiltersContext);
  return (
    <div className="">
      {JSON.stringify(filters)}
      {/* <div className="inline"></div> */}
    </div>
  );
}

export default FiltersDisplay;
