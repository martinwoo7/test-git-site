"use client";

import { siteConfig } from "@/lib/config";
import MainNav from "./main-nav";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";

const SiteHeader = () => {
  return (
    <header className="bg-background sticky top-0 z-50 w-full max-w-7xl mx-auto">
      <div className="container-wrapper 3xl:px-0 px-6">
        <div className="3xl:container flex h-(--header-height) items-center justify-between gap-2">
          <MobileNav className="flex lg:hidden" items={siteConfig.navItems} />
          <Link href="/" className="flex">
            Laboratory Logo
            <span className="sr-only">{siteConfig.name}</span>
          </Link>

          <div className="flex items-center min-w-4">
            <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
