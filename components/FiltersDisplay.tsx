import { Fragment, useContext } from "react";
import { FiltersContext } from "../pages";
import FilterDisplay from "./FilterDisplay";

function FiltersDisplay() {
  return (
    <div className="">
      <FilterDisplay name="projects" color="#FF7E5C" />
      <FilterDisplay name="teams" color="#9B67FF" />
      {/* <FilterSelector data={filters.members} /> */}
    </div>
  );
}

export default FiltersDisplay;
