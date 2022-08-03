import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";

export type NextPageWithLayout = NextPage & {
  getLayout?: (pageProps: AppProps, page: ReactElement) => ReactNode;
};
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(
      pageProps.data,
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}
export default MyApp;
