import Link from "next/link";
import Container from "../layouts/Container";
import Image from "next/image";

const links = [
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

const legals = [
  {
    label: "Terms of Service",
    href: "/terms-of-service",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Refund Policy",
    href: "/refund-policy",
  },
];

const socials = [
  {
    name: "X/Twitter",
    href: "/",
  },
  {
    name: "LinkedIn",
    href: "/",
  },
  {
    name: "Instagram",
    href: "/",
  },
  {
    name: "Facebook",
    href: "/",
  },
];

const services = [
  {
    name: "Web Design",
    href: "/",
  },
  {
    name: "Web Development",
    href: "/",
  },
  {
    name: "UI/UX",
    href: "/",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/5">
      <Container className="px-11">
        <div className="grid grid-cols-1 gap-y-6 py-11 md:gap-y-0 lg:grid-cols-4 lg:py-16">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                width={40}
                height={40}
                src="/images/logo.png"
                alt="Brand logo"
              />
              <span className="text-base font-semibold text-white">
                Druk <br /> Digital
              </span>
            </Link>
            <p className="text-zinc-400">
              We craft precision components and tailored templates that power
              exceptional digital experiences.
            </p>
          </div>
          <div className="lg:pl-11">
            <h3 className="mb-4 text-sm font-semibold text-white uppercase md:mb-6">
              Quick Links
            </h3>

            <ul className="flex flex-col space-y-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-11">
            <h3 className="mb-4 text-sm font-semibold text-white uppercase md:mb-6">
              Company
            </h3>
            <ul className="flex flex-col space-y-4">
              {legals.map((legal) => (
                <li key={legal.href}>
                  <Link
                    href={legal.href}
                    className="text-zinc-400 transition-colors hover:text-white"
                  >
                    {legal.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:pl-11">
            <h3 className="mb-4 text-sm font-semibold text-white uppercase md:mb-6">
              Our Services
            </h3>
            <ul className="flex flex-col space-y-4">
              {services.map((service) => (
                <p
                  key={service.name}
                  className="text-zinc-400 transition-colors hover:text-white"
                >
                  {service.name}
                </p>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/5 py-11">
        <Container className="px-11">
          <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
            <p className="text-sm text-zinc-400">
              All right reserved &copy; 2024{" "}
              <span className="font-semibold text-white">
                Druk Digital Studio.
              </span>
            </p>

            <div className="flex items-center gap-6">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
