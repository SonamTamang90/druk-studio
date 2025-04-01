"use client";

import Link from "next/link";
import Button from "../ui/Button";

import { useState, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "UI Blocks",
    href: "/ui-blocks",
  },
  {
    label: "Templates",
    href: "/templates",
  },
  {
    label: "Sign In",
    href: "/sign-in",
  },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-8 left-0 z-50 flex w-full justify-center">
      {/* Desktop Navigation */}
      <div
        className={`hidden items-center space-x-6 rounded-md border border-white/15 px-3 py-2 md:flex ${isScrolled ? "backdrop-blur-sm" : ""}`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-brand text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}

        <Button href="/pricing" variant="secondary" size="sm">
          Get Full Access
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div className="flex w-full justify-end pr-8 md:hidden">
        <Menu as="div" className="relative">
          {({ open }) => (
            <>
              <MenuButton className="cursor-pointer rounded-md p-2 text-white transition-colors hover:bg-zinc-800/50">
                <p className="text-white uppercase">Menu</p>
              </MenuButton>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <MenuItems
                  static
                  className="absolute right-0 flex w-60 origin-top-right flex-col rounded-md border border-white/15 bg-zinc-950/90 px-2 pt-2 pb-4 shadow-lg backdrop-blur-md"
                >
                  {links.map((link) => (
                    <MenuItem key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-md px-3 py-2 text-left text-white hover:bg-zinc-800/50 hover:text-yellow-200"
                      >
                        {link.label}
                      </Link>
                    </MenuItem>
                  ))}
                  <MenuItem>
                    <Button
                      href="/pricing"
                      size="sm"
                      variant="secondary"
                      className="mt-8"
                    >
                      Get Full Access
                    </Button>
                  </MenuItem>
                </MenuItems>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
