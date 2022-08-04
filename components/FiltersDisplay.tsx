import { Fragment, useContext } from "react";
import { FiltersContext } from "../pages";
import FilterDisplay from "./FilterDisplay";
import FilterDisplayMember from "./FilterDisplayMember";

function FiltersDisplay() {
  return (
    <div className="">
      <span className="font-bold text-[#74FA6D]">{8}</span> {`records `}
      <FilterDisplay name="projects" color="#FF7E5C">
        <span>{`for `}</span>
      </FilterDisplay>
      <FilterDisplay name="teams" color="#9B67FF">
        <span>{`in `}</span>
      </FilterDisplay>
      <FilterDisplayMember name="members" color="#78EECB">
        <span>{`with `}</span>
      </FilterDisplayMember>
    </div>
  );
}

export default FiltersDisplay;
