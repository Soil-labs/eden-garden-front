import { Member } from "../types/Member";
import { Project } from "../types/Project";
import { Team } from "../types/Team";
import { Title } from "../types/Title";

interface Props {
  name?: string;
  options: Project[] | Team[] | Member[] | Title[];
}
function FilterSelector({ name, options }: Props) {
  return <div className="bg-bgGrey min-h-screen">{name}</div>;
}

export default FilterSelector;
