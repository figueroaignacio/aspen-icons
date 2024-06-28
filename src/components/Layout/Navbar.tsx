"use client";

// Components
import { Logo } from "../Logo";
import { MobileMenu } from "./MobileMenu";

// Config

export function Navbar() {
  return (
    <header className="border-b-[.0625rem] border-white/10 flex items-center gap-24 py-3 px-8">
      <Logo />
      <div className="items-center gap-4 hidden md:flex"></div>
      <MobileMenu />
    </header>
  );
}
