"use client";

import { mainLinks } from "@/constants";
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavItem = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  return (
    <li>
      <PopoverButton as={Link} href={href}>
        {children}
      </PopoverButton>
    </li>
  );
};

const MobileNavigation = () => {
  return (
    <Popover className="pointer-events-auto pr-11 md:hidden">
      <PopoverButton className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDown className="ml-3 h-auto w-5 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-xs duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-black/80"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in dark:bg-zinc-900 dark:ring-zinc-800"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <X className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Navigation
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            <MobileNavItem href="/about">About</MobileNavItem>
            <MobileNavItem href="/articles">Articles</MobileNavItem>
            <MobileNavItem href="/projects">Projects</MobileNavItem>
            <MobileNavItem href="/speaking">Speaking</MobileNavItem>
            <MobileNavItem href="/uses">Uses</MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  );
};

const NavItem = ({ href, children }: { href: string; children: string }) => {
  const isActive = usePathname() === href;
  return (
    <li>
      <Link
        href={href}
        className={`relative block p-3 ${isActive ? "text-brand" : "text-white"} transition-opacity hover:opacity-75`}
      >
        {children}
        {isActive && (
          <span className="from-brand/0 via-brand/40 to-brand/0 absolute inset-x-1 -bottom-px h-px bg-linear-to-r" />
        )}
      </Link>
    </li>
  );
};

const DesktopNavigation = () => {
  return (
    <nav className="pointer-events-auto mx-auto hidden max-w-max md:block">
      <ul className="border-light-100/15 flex items-center rounded-full border px-3 text-sm font-medium shadow-lg backdrop-blur-sm">
        {mainLinks.map(({ route, label }) => (
          <NavItem key={route} href={route}>
            {label}
          </NavItem>
        ))}

        <Link
          href="/sign-up"
          className="bg-light-300 inline-block rounded-full px-2 py-1 transition-opacity hover:opacity-75"
        >
          Get Access
        </Link>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="fixed top-11 left-0 w-full">
      <div className="flex flex-1 justify-end md:justify-center">
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
};

export default Header;
