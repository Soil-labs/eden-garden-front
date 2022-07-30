import Link from "next/link";
// import BurgerMenu from "./BurgerMenu";
// import WhatIsSoil from "./WhatIsSoil";

export default function Header() {
  return (
    <header className="mb-4 shadow-md shadow-slate-500/10">
      <nav
        className="relative bg-white max-w-7xl px-4 h-16 sm:px-5 lg:px-6 flex items-center justify-between"
        aria-label="Top"
      >
        <Link href="/">
          <a>
            <span className="text-2xl">🌱</span>
            <span className="text-soilGreen-70 text-xl font-bold ml-2">
              Soil.
            </span>
          </a>
        </Link>
      </nav>
    </header>
  );
}
