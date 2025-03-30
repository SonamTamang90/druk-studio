"use client";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { label } from "framer-motion/client";
import Link from "next/link";
import { useEffect, useState } from "react";

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
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-6 left-0 z-50 flex w-full justify-center">
      {/* Desktop Navigation */}
      <div
        className={`border-neutrals-100/15 hidden rounded-md border bg-transparent px-3 md:flex ${isScrolled ? "backdrop-blur-sm" : ""}`}
      >
        <ul className="flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="hover:text-brand inline-block py-4 text-xs font-semibold text-white uppercase transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
          {/* CTA Links */}
          <li>
            <Link
              href="/sign-in"
              className="hover:text-brand inline-block py-4 text-xs font-semibold text-white uppercase transition-colors"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              href="/sign-in"
              className="inline-block rounded-md bg-white px-3 py-2 text-xs font-semibold text-black uppercase transition-opacity hover:opacity-90"
            >
              Get Full Access
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile Navigation */}
      <div className="flex w-full justify-end px-16 md:hidden">
        <Menu as="div" className="relative">
          <MenuButton
            as="button"
            onClick={() => setOpen((open) => !open)}
            className="cursor-pointer text-xs font-semibold text-white uppercase"
          >
            Menu
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
            <MenuItems className="absolute right-0 mt-2 flex w-52 origin-top-right flex-col gap-6 rounded-md bg-zinc-900 p-6 backdrop-blur-sm transition duration-300 ease-in data-[closed]:opacity-0">
              {links.map((link) => (
                <MenuItem key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand text-xs font-semibold text-white uppercase transition-colors"
                  >
                    {link.label}
                  </Link>
                </MenuItem>
              ))}

              <MenuItem>
                <Link
                  href="/sign-in"
                  className="hover:text-brand inline-block text-xs font-semibold text-white uppercase transition-colors"
                >
                  Sign In
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/sign-in"
                  className="inline-block rounded-md bg-white px-3 py-2 text-center text-xs font-semibold text-black uppercase transition-opacity hover:opacity-90"
                >
                  Get Full Access
                </Link>
              </MenuItem>
            </MenuItems>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
