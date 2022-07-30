import Header from "./Header";
import { AppProps } from "next/app";
import { ReactElement } from "react";

function Layout(props: { data: AppProps; children: ReactElement }) {
  return (
    <section className="bg-bgGrey min-h-screen">
      <div className="w-full max-w-screen-xl mx-auto">
        <Header />
        <div className="relative mx-6">
          <main>{props.children}</main>
        </div>
      </div>
    </section>
  );
}

export default Layout;
