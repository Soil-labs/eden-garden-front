import { useContext, useMemo, useState } from "react";
import { ProjectUpdate } from "../generated/graphql";
import { FiltersContext } from "../pages";

function Display() {
  const { updates } = useContext(FiltersContext);
  const [sortedUpdates, setSortedUpdates] = useState<ProjectUpdate[]>([]);

  useMemo(() => {
    const arrayToSort: ProjectUpdate[] = [].slice.call(updates);
    if (updates) {
      setSortedUpdates(
        arrayToSort.sort(
          (a, b) => Number(b.registeredAt) - Number(a.registeredAt)
        )
      );
    }
  }, [updates]);

  return (
    <section className="pt-20">
      {sortedUpdates.map((update: ProjectUpdate, index: Number) => (
        <div
          key={`${index}`}
          className="bg-white mb-3 border border-slate-300 rounded-xl px-2 py-3"
        >
          {update.registeredAt && (
            <p className="text-xs text-slate-400">
              {new Date(Number(update.registeredAt)).toLocaleDateString()}
            </p>
          )}
          <p className="text-lg font-bold text-slate-700">{update.title}</p>
          <p>{update.content}</p>
        </div>
      ))}
    </section>
  );
}

export default Display;
