import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" border-t border-[#D9D9D9]/15">
      <div className="max-w-7xl mx-auto px-8 py-24 lg:px-11">
        <div className="grid grid-cols-4 justify-center px-6">
          <div>
            <Link
              href="#"
              className="flex items-center gap-2.5 text-white  text-sm uppercase font-bold"
            >
              <img src="/images/logo.png" alt="logo" className="h-10" />
              <span>
                Druk <br />
                Digital
              </span>
            </Link>
            <p className="max-w-xs text-zinc-400 text-sm mt-6">
              We craft precision components and tailored templates that power
              exceptional digital experiences.
            </p>
          </div>
          <div className="pl-11">
            <h3 className="text-white font-semibold uppercase text-sm mb-6">
              Quick Links
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="/about"
                className="text-zinc-400 text-sm font-semibold"
              >
                About
              </Link>
              <Link
                href="/about"
                className="text-zinc-400 text-sm font-semibold"
              >
                Components
              </Link>
              <Link
                href="/about"
                className="text-zinc-400 text-sm font-semibold"
              >
                Templates
              </Link>
              <Link
                href="/about"
                className="text-zinc-400 text-sm font-semibold"
              >
                Assets
              </Link>
            </div>
          </div>
          <div className="pl-11">
            <h3 className="text-white font-semibold uppercase text-sm mb-6">
              Company
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="/about"
                className="text-zinc-400 text-sm font-semibold"
              >
                Terms of Service
              </Link>
              <Link
                href="/about"
                className="text-zinc-400 text-sm font-semibold"
              >
                Privacy Policy
              </Link>
              <Link
                href="/about"
                className="text-zinc-400 text-sm font-semibold"
              >
                Refund Policy
              </Link>
            </div>
          </div>
          <div className="pl-11">
            <h3 className="text-white font-semibold uppercase text-sm mb-6">
              Our Services
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="/about"
                className="text-zinc-400 text-sm font-semibold"
              >
                Web Design
              </Link>
              <Link
                href="/about"
                className="text-zinc-400 text-sm font-semibold"
              >
                Seo optimization
              </Link>
              <Link
                href="/about"
                className="text-zinc-400 text-sm font-semibold"
              >
                Graphic Design
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[#D9D9D9]/15 py-11">
        <div className="max-w-7xl mx-auto px-16">
          <div className="flex items-center justify-between">
            <p className="text-zinc-400 text-sm">
              All right reserved &copy; 2024{" "}
              <span className="text-white font-semibold">
                Druk Digital Studio.
              </span>
            </p>

            <div className="flex items-center gap-6">
              <Link href="#" className="text-zinc-200 text-sm">
                X / Twitter
              </Link>
              <Link href="#" className="text-zinc-200 text-sm">
                LinkedIn
              </Link>
              <Link href="#" className="text-zinc-200 text-sm">
                Instagram
              </Link>
              <Link href="#" className="text-zinc-200 text-sm">
                Facebook
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
