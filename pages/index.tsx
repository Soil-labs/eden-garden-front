import type { NextPageWithLayout } from "./_app";
import Head from "next/head";
import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Layout from "../components/layout/Layout";
import { AppProps } from "next/app";
import FiltersSelector from "../components/FiltersSelector";
import FiltersDisplay from "../components/FiltersDisplay";
import { Project } from "../generated/graphql";
import { Team } from "../types/Team";
import {
  Members,
  Unnamed_1_Query,
  Unnamed_1_QueryVariables,
  Unnamed_2_Query,
  Unnamed_2_QueryVariables,
} from "../generated/graphql";
import { useQuery } from "@apollo/client";
import { FIND_MEMBERS } from "./api/findMembers.gql";
import { FIND_PROJECTS } from "./api/findProjects.gql";
import { Title } from "../types/Title";

export interface ContextType {
  filters: {
    projects: Project[];
    teams: Team[];
    members: Members[];
    titles: Title[];
  };
  setFilters: Dispatch<SetStateAction<any>>;
  filtersData: {
    projects: Project[];
    teams: Team[];
    members: Members[];
    titles: Title[];
  } | null;
  setFiltersData: Dispatch<SetStateAction<any>> | null;
}
export const FiltersContext = createContext<ContextType>({
  filters: {
    projects: [],
    teams: [],
    members: [],
    titles: [],
  },
  setFilters: () => {},
  filtersData: null,
  setFiltersData: null,
});

const Home: NextPageWithLayout = () => {
  const [filters, setFilters] = useState<any>({
    projects: [],
    teams: [],
    members: [],
    titles: [],
  });
  const [filtersData, setFiltersData] = useState<any>({
    projects: [],
    teams: [],
    members: [],
    titles: [],
  });

  const {
    loading: membersLoading,
    data: membersData,
    error: membersError,
  } = useQuery<Unnamed_1_Query, Unnamed_1_QueryVariables>(FIND_MEMBERS, {}); // Use the type here for type safety
  const {
    loading: projectsLoading,
    data: projectsData,
    error: projectsError,
  } = useQuery<Unnamed_2_Query, Unnamed_2_QueryVariables>(FIND_PROJECTS, {}); // Use the type here for type safety

  useEffect(() => {
    if (membersData?.findMembers || projectsData?.findProjects) {
      setFiltersData({
        ...filtersData,
        members: membersData?.findMembers || [],
        projects: projectsData?.findProjects || [],
      });
    }
  }, [membersData, projectsData]);

  return (
    <div className="">
      <nav className="flex justify-between">
        <FiltersContext.Provider
          value={{ filters, setFilters, filtersData, setFiltersData }}
        >
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
