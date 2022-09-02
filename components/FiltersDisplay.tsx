import { Fragment, useContext } from "react";
import { FiltersContext } from "../pages";
import FilterDisplay from "./FilterDisplay";
import FilterDisplayMember from "./FilterDisplayMember";

function FiltersDisplay() {
  const { updates } = useContext(FiltersContext);
  return (
    <div className="text-black">
      <span className="font-bold text-[#74FA6D]">{updates.length}</span>{" "}
      {`records `}
      <FilterDisplay name="projects" color="#FF7E5C">
        <span>{`for `}</span>
      </FilterDisplay>
      <FilterDisplay name="teams" color="#9B67FF">
        <span>{`in `}</span>
      </FilterDisplay>
      <FilterDisplay name="roles" color="#bece46">
        <span>{``}</span>
      </FilterDisplay>
      <FilterDisplayMember name="members" color="#78EECB">
        <span>{`with `}</span>
      </FilterDisplayMember>
    </div>
  );
}

export default FiltersDisplay;
