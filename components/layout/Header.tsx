import Link from "next/link";
// import BurgerMenu from "./BurgerMenu";
// import WhatIsSoil from "./WhatIsSoil";

export default function Header() {
  return (
    <header className="pt-16 mb-4">
      <nav
        className="z-30 fixed top-0 left-0 w-screen bg-white px-4 h-16 sm:px-5 lg:px-6 shadow-md shadow-slate-500/10"
        aria-label="Top"
      >
        <div className="h-full max-w-screen-xl mx-auto flex items-center justify-between">
          <Link href="/">
            <a>
              <span className="text-2xl">🌱</span>
              <span className="text-soilGreen-70 text-xl font-bold ml-2">
                Soil.
              </span>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
