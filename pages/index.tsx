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
import {
  FindMembersDocument,
  FindMembersInput,
  FindProjectsDocument,
  FindTeamsDocument,
  FindTeamsQuery,
  FindTeamsQueryVariables,
  Project,
  useFindMembersQuery,
  useFindProjectsQuery,
  useFindTeamsQuery,
} from "../generated/graphql";
import { Team } from "../generated/graphql";
import {
  Members,
  FindMembersQuery,
  FindMembersQueryVariables,
  FindProjectsQuery,
  FindProjectsQueryVariables,
} from "../generated/graphql";
import { useQuery } from "@apollo/client";
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
  } = useFindMembersQuery({
    variables: {
      fields: {},
    },
  });
  const {
    loading: projectsLoading,
    data: projectsData,
    error: projectsError,
  } = useFindProjectsQuery({
    variables: {
      fields: {},
    },
  });
  const {
    loading: teamsLoading,
    data: teamsData,
    error: teamsError,
  } = useFindTeamsQuery({
    variables: {
      fields: {},
    },
  });

  useEffect(() => {
    if (
      membersData?.findMembers ||
      projectsData?.findProjects ||
      teamsData?.findTeams
    ) {
      setFiltersData({
        ...filtersData,
        members: membersData?.findMembers || [],
        projects: projectsData?.findProjects || [],
        teams: teamsData?.findTeams || [],
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
