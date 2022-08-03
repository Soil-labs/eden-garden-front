import type { NextPageWithLayout } from "./_app";
import Head from "next/head";
import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from "react";
import Layout from "../components/layout/Layout";
import { AppProps } from "next/app";
import FiltersSelector from "../components/FiltersSelector";
import FiltersDisplay from "../components/FiltersDisplay";
import { Project } from "../types/Project";
import { Team } from "../types/Team";
import {
  Members,
  Unnamed_1_Query,
  Unnamed_1_QueryVariables,
} from "../generated/graphql";
import { useQuery } from "@apollo/client";
import { FIND_MEMBERS } from "./api/findMembers.gql";
import { Title } from "../types/Title";

export interface ContextType {
  filters: {
    projects: Project[];
    teams: Team[];
    members: Members[];
    titles: Title[];
  };
  setFilters: Dispatch<SetStateAction<any>>;
}
export const FiltersContext = createContext<ContextType>({
  filters: {
    projects: [],
    teams: [],
    members: [],
    titles: [],
  },
  setFilters: () => {},
});

const Home: NextPageWithLayout = () => {
  const [filters, setFilters] = useState({
    projects: [],
    teams: [],
    members: [],
    titles: [],
  });

  const {
    loading: isTodosLoading,
    data: todosConnection,
    error: todosError,
  } = useQuery<Unnamed_1_Query, Unnamed_1_QueryVariables>(FIND_MEMBERS, {}); // Use the type here for type safety

  return (
    <div className="">
      <nav className="flex justify-between">
        <FiltersContext.Provider value={{ filters, setFilters }}>
          <FiltersDisplay />
          <FiltersSelector />
        </FiltersContext.Provider>
      </nav>
    </div>
  );
};

Home.getLayout = function getLayout(data: AppProps, component: ReactElement) {
  return <Layout data={data}>{component}</Layout>;
};

export default Home;
