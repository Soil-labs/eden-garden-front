import type { NextPageWithLayout } from "./_app";
import Head from "next/head";
import { ReactElement } from "react";
import Layout from "../components/layout/Layout";
import { AppProps } from "next/app";

const Home: NextPageWithLayout = () => {
  return (
    <div className="">
      <nav>
        {/* <FiltersDisplay /> */}
        {/* <FiltersSelector /> */}
      </nav>
    </div>
  );
};

Home.getLayout = function getLayout(data: AppProps, component: ReactElement) {
  return <Layout data={data}>{component}</Layout>;
};

export default Home;
