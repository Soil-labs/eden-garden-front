import { useContext, useMemo, useState } from "react";
import { ProjectUpdate } from "../generated/graphql";
import { FiltersContext } from "../pages";
import Avatar from "./Avatar";

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
          <p className="text-black mb-3">{update.content}</p>
          {update.threadDiscordlID && <p className="text-black mb-3"><a className="border border-slate-300 rounded-xl px-1 py-0.5 hover:bg-slate-300 " href={update.threadDiscordlID? update.thread: ""}>Discord Thread</a></p>}
          <div>
            {!!update?.members?.length && (
              <span>
                {update?.members?.map((item, index) => (
                  <span
                    key={index}
                    className="font-bold -mr-[8px] last:mr-0 cursor-pointer"
                    style={{ color: "#78EECB" }}
                  >
                    <Avatar src={item?.discordAvatar || ""} border="#fff" />
                  </span>
                ))}
              </span>
            )}
            <span className="ml-2 font-bold text-[#FF7E5C] first:ml-0">
              {update.projects?.title}
            </span>
            {update?.team?.map((item, index) => (
              <span className="ml-2 font-bold text-[#9B67FF]" key={index}>
                {item?.name}
              </span>
            ))}
            {update?.role?.map((item, index) => (
              <span className="ml-2 font-bold text-[#bece46]" key={index}>
                {item?.name}
              </span>
            ))}
            
          </div>
          {/* <div>{JSON.stringify(update)}</div> */}
        </div>
      ))}
    </section>
  );
}

export default Display;
