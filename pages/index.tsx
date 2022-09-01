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
  Project,
  ProjectUpdate,
  useFindMembersQuery,
  useFindProjectsQuery,
  useFindProjectsUpdateQuery,
  useFindTeamsQuery,
} from "../generated/graphql";
import { Team } from "../generated/graphql";
import { Members } from "../generated/graphql";
import { Title } from "../types/Title";
import Display from "../components/Display";

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
  updates: ProjectUpdate[];
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
  updates: [],
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
  const [updates, setUpdates] = useState<any>({
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
    loading: projectUpdatesLoading,
    data: projectUpdates,
    error: projectUpdatesError,
  } = useFindProjectsUpdateQuery({
    variables: {
      fields: {
        projectID: !!filters.projects.length
          ? filters.projects.map((item: Project) => item._id)
          : null,
        memberID: !!filters.members.length
          ? filters.members.map((item: Members) => item._id)
          : null,
        teamID: !!filters.teams.length
          ? filters.teams.map((item: Team) => item._id)
          : null,
      },
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
    if (projectUpdates?.findProjectUpdates) {
      setUpdates(projectUpdates.findProjectUpdates);
    }
    console.log(projectUpdates)
    let updatedProjects: (string | null | undefined)[] = [];
    let updatedTeams = [];
    projectUpdates?.findProjectUpdates?.map((update) => {
      updatedProjects.push(update?.projects?._id)
      update?.team?.map((team) => {
        updatedTeams.push(team?._id)
      })
    })
    if (
      membersData?.findMembers ||
      projectsData?.findProjects ||
      teamsData?.findTeams
    ) {
      projectsData?.findProjects?.filter((project) => {
        return updatedProjects.includes(project?._id) ? project : ""
      })
      setFiltersData({
        ...filtersData,
        members: membersData?.findMembers || [],
        projects: projectsData?.findProjects || [],
        teams: teamsData?.findTeams || [],
      });
      
    }
  }, [membersData, projectsData, teamsData, projectUpdates]);

  return (
    <div className="relative">
      <FiltersContext.Provider
        value={{ filters, setFilters, filtersData, setFiltersData, updates }}
      >
        <nav className="fixed right-0 w-full">
          <div className="w-full mx-auto px-6 max-w-screen-xl flex justify-between items-center">
            <FiltersDisplay />
            <FiltersSelector />
          </div>
        </nav>

        <Display />
      </FiltersContext.Provider>
    </div>
  );
};

Home.getLayout = function getLayout(data: AppProps, component: ReactElement) {
  return <Layout data={data}>{component}</Layout>;
};

export default Home;
