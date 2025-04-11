"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

const links = [
  {
    label: "Components",
    href: "/components",
  },
  {
    label: "Templates",
    href: "/templates",
  },
  {
    label: "Assets",
    href: "/assets",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

const NavigationItem = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <li>
      <Link
        href={href}
        className="inline-block transition-opacity hover:opacity-75 dark:text-zinc-50"
      >
        {children}
      </Link>
    </li>
  );
};

const DesktopNavigation = () => {
  return (
    <nav className="mx-auto flex h-full max-w-7xl items-center px-8 lg:px-11">
      <ul className="flex items-center gap-6">
        {links.map(({ label, href }) => (
          <NavigationItem key={label} href={href}>
            {label}
          </NavigationItem>
        ))}
      </ul>
    </nav>
  );
};

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/images/logo.png" alt="Druk UI logo" width={36} height={36} />
      <span className="text-base font-semibold dark:text-zinc-50">Druk UI</span>
    </Link>
  );
};

const RightNavigationItem = () => {
  return (
    <div className="flex items-center gap-6">
      <Link href="/sign-in" className="dark:text-zinc-50">
        Sign In
      </Link>
      <Link
        href="/sign-in"
        className="rounded-full px-4 py-1.5 transition-opacity hover:opacity-75 dark:bg-zinc-200 dark:text-zinc-900"
      >
        Get full access
      </Link>
    </div>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 transition-all duration-300 ${isScrolled ? "h-0 opacity-0" : "h-16"} z-50 w-full border-b dark:border-zinc-400/20`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-8 lg:px-11">
        <Logo />
        <DesktopNavigation />
        <RightNavigationItem />
      </div>
    </header>
  );
};

export default Header;
