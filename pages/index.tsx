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
    
    let updatedProjectsID: (string | null | undefined)[] = [];
    let updatedTeamsID: (string | null | undefined)[] = [];
    let updatedMembersID: (string | null | undefined)[] = [];
    projectUpdates?.findProjectUpdates?.map((update) => {
      updatedProjectsID.push(update?.projects?._id)
      update?.team?.map((team) => {
        updatedTeamsID.push(team?._id)
      })
      update?.members?.map((member) => {
        updatedMembersID.push(member?._id)
      })
    })
    if (
      membersData?.findMembers ||
      projectsData?.findProjects ||
      teamsData?.findTeams
    ) {
      const updatedProjects = projectsData?.findProjects?.filter((project) => {
        if(updatedProjectsID.includes(project?._id)){
          return project
        }
      })

      const updatedTeams = teamsData?.findTeams?.filter((team) => {
        if(updatedTeamsID.includes(team?._id)){
          return team
        }
      })

      const updatedMembers = membersData?.findMembers?.filter((member) => {
        if(updatedMembersID.includes(member?._id)){
          return member
        }
      })
      setFiltersData({
        ...filtersData,
        members: updatedMembers || [],
        projects: updatedProjects || [],
        teams: updatedTeams || [],
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
