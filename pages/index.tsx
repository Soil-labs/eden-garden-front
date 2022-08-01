import type { NextPageWithLayout } from "./_app";
import Head from "next/head";
import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";
import Layout from "../components/layout/Layout";
import { AppProps } from "next/app";
import FiltersSelector from "../components/FiltersSelector";
import FiltersDisplay from "../components/FiltersDisplay";
import { Project } from "../types/Project";
import { Team } from "../types/Team";
import { Member } from "../types/Member";
import { Title } from "../types/Title";

export interface ContextType {
  filters: {
    projects: Project[];
    teams: Team[];
    members: Member[];
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
