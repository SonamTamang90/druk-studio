"use client";

import Container from "@/components/layouts/Container";
import { TestimonialCard } from "@/components/TestimonialCard";
import Button from "@/components/ui/Button";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const features = [
  {
    letter: "R",
    title: "Responsive",
    description: `Components that automatically resize and reorganize for all screen sizes.`,
  },
  {
    letter: "A",
    title: "Accessibility",
    description: `Inclusive components ensuring equal access for all users and assistive technologies.`,
  },
  {
    letter: "S",
    title: "Seo Optimized",
    description: `Inclusive components ensuring equal access for all users and assistive technologies.`,
  },
];

const projects = [
  {
    id: 1,
    image: "/hero-screen.png",
    title: "Hero Sections",
    count: "5 Components",
  },
  {
    id: 2,
    image: "/pricing-screen.png",
    title: "Pricing Section",
    count: "4 Components",
  },
  {
    id: 3,
    image: "/gridlist-screen.png",
    title: "Hero Section",
    count: "6 Components",
  },
  {
    id: 4,
    image: "/testimonials-screen.png",
    title: "Testimonial Sections",
    count: "3 Components",
  },
  {
    id: 5,
    image: "/forms-screen.png",
    title: "Forms",
    count: "9 Components",
  },
  {
    id: 6,
    image: "/tables-screen.png",
    title: "Tables",
    count: "7 Components",
  },
];

const testimonials = [
  {
    quote:
      "Druk Digital's UI components have transformed our development workflow. We're building high-quality interfaces in half the time with their meticulously crafted templates",
    name: "Sarah Chen",
    role: "Lead Developer at Nexus Innovation",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    quote:
      "The attention to detail in Druk's component library is exceptional. Their dark theme elements have become the foundation of our product's signature look.",
    name: "Marcus Williams",
    role: "UX Director, Elevate Digital",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    quote:
      "As a solo developer, Druk Digital's templates have been game-changing for my client projects. Professional results without the enterprise price tag.",
    name: "Jamie Rodriguez",
    role: "Independent Web Developer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    quote:
      "We evaluated several UI libraries before choosing Druk Digital. The flexibility and consistency across components made it an easy decision for our design system.",
    name: "Aisha Johnson",
    role: "Product Manager at TechForward",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
  },
];

const Hero = () => {
  return (
    <section className="bg-hero h-[75lvh] bg-cover bg-center md:h-lvh">
      <Container className="flex h-full flex-col justify-center px-11">
        {/* Hero text */}
        <div className="mb-11 max-w-xl">
          <span className="mb-1 inline-block rounded-full border border-white/15 px-2 py-1 text-xs text-zinc-200">
            Made by Druk Digital
          </span>
          <h1 className="text-5xl font-extrabold tracking-wide text-white lg:text-7xl">
            Build design even faster
          </h1>
          <p className="mt-6 max-w-md text-lg text-zinc-400">
            Our comprehensive toolkit helps developers build stunning interfaces
            and websites in record time.
          </p>
        </div>
        {/* Hero CTA */}
        <div className="flex space-x-6">
          <Button variant="primary" href="/ui-blocks">
            Browse UI Blocks
          </Button>
          <Button variant="outline" href="/templates">
            Explore Templates
          </Button>
        </div>
      </Container>
    </section>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-11">
      <Container className="px-11">
        {/* Section heading */}
        <div className="mb-16 max-w-sm">
          <span className="text-brand mb-1 inline-block text-xs font-semibold uppercase">
            UI Blocks
          </span>
          <h2 className="text-2xl font-bold text-white capitalize">
            Professional UI components for Real-World projects
          </h2>
          <p className="mt-4 max-w-md text-zinc-400">
            A library with 50+ UI components to meet any website design and
            development need.
          </p>
        </div>
        {/* Features */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-md border border-white/5 bg-zinc-900 p-6"
            >
              <div className="relative mb-4">
                <span className="inline-block bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent">
                  {feature.letter}
                </span>
                <h3 className="absolute bottom-2 left-6.5 text-white uppercase">
                  {feature.title}
                </h3>
              </div>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
      <div className="mt-16 border-y border-white/5 px-11 py-6">
        <p className="text-zinc-400">
          UI Blocks for Marketing, Ecommerce and Applications
        </p>
      </div>
      <div className="relative border-b border-white/5">
        <Container className="relative px-8">
          <ul
            role="list"
            className="mx-4 grid grid-cols-2 gap-6 md:grid-cols-3"
          >
            {projects.map((project) => {
              return (
                <li
                  key={project.id}
                  className="flex w-full flex-col p-3 md:w-64 lg:w-auto"
                >
                  <div className="group relative cursor-pointer">
                    <Image
                      width={708}
                      height={480}
                      alt=""
                      src={project.image}
                      className="aspect-[708/480] w-full rounded-md object-cover group-hover:opacity-75"
                    />
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-400">
                        {project.count}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="pointer-events-none absolute inset-x-0 bottom-px z-10 flex h-94 items-end justify-center bg-linear-to-b to-black pb-8 max-sm:hidden">
            <Link
              href="/ui-blocks"
              className="pointer-events-auto inline-flex justify-center gap-2 rounded-full border border-[#414146] bg-[#1E1E1E] px-4 py-2 text-sm/6 font-semibold text-white hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950"
            >
              Browse all components
              <svg
                fill="currentColor"
                aria-hidden="true"
                viewBox="0 0 10 10"
                className="-mr-0.5 w-2.5"
              >
                <path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z"></path>
              </svg>
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="lg:pt-11 lg:pb-24">
      <Container className="px-6">
        <h2 className="mb-24 text-center text-2xl font-bold text-white capitalize">
          ❤️ Trusted by Creators
        </h2>
        <div className="grid grid-cols-1 border-t border-[#D9D9D9]/15 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`testimonial-${index}`}
              testimonial={testimonial}
              hasBorderRight={index % 2 === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

const PricingSection = () => {
  return (
    <div className="flex items-center justify-center px-6 pb-11">
      <div className="mx-auto w-full max-w-6xl">
        <div className="pb-24">
          <h2 className="text-center text-2xl font-bold text-white capitalize">
            Choose the plan that's right for you
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Personal Plan */}
          <div className="rounded-md border border-zinc-800 bg-[#d9d9d90d] p-10 transition-all hover:border-zinc-700">
            <div className="mb-6">
              <span className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
                Basic
              </span>
              <p className="mt-2 text-sm text-white">
                For individuals working on their next big idea.
              </p>
            </div>

            <div className="mt-8 mb-8 flex items-start">
              <span className="text-4xl font-bold text-white">$16</span>
              <div className="ml-4">
                <div className="text-sm text-zinc-400">one time payment</div>
                <div className="text-sm text-zinc-400">plus local taxes</div>
              </div>
            </div>

            <div className="mb-10 flex">
              {/* <div className="mr-4 flex-shrink-0">
                <Infinity className="h-8 w-8 text-zinc-400" />
              </div> */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase">
                  Lifetime access
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Get instant access to everything we have today, plus any new
                  components and templates we add in the future.
                </p>
              </div>
            </div>
            <button className="w-full rounded-md border border-[#070707] bg-gradient-to-b from-[#D7D794] to-[#F6FF7F] px-6 py-2 text-sm font-semibold uppercase transition-colors hover:bg-zinc-800 md:w-auto">
              Get Full Access
            </button>
          </div>

          {/* Teams Plan */}
          <div className="rounded-md border border-zinc-800 p-10 transition-all hover:border-zinc-700">
            <div className="mb-6">
              <span className="text-sm font-semibold tracking-wider text-zinc-400 uppercase">
                Basic Plus
              </span>
              <p className="mt-2 text-sm text-white">
                For product teams and agencies.
              </p>
            </div>

            <div className="mt-8 mb-8 flex items-start">
              <span className="text-4xl font-bold text-white">$499</span>
              <div className="ml-4">
                <div className="text-sm text-zinc-400">one time payment</div>
                <div className="text-sm text-zinc-400">plus local taxes</div>
              </div>
            </div>

            <div className="mb-10 flex">
              {/* <div className="mr-4 flex-shrink-0">
                <Users className="h-8 w-8 text-zinc-400" />
              </div> */}
              <div>
                <h3 className="font-medium text-white">
                  Get access for your entire team —
                </h3>
                <p className="mt-1 max-w-sm text-sm text-zinc-400">
                  Team licenses include access for up to 25 people to
                  accommodate even the largest teams at your company.
                </p>
              </div>
            </div>
            <button className="w-full rounded-md border border-[#414146] bg-[#1E1E1E] px-6 py-2 font-medium text-white transition-colors hover:bg-gray-200 md:w-auto">
              Get Tailwind Plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="relative overflow-hidden pt-11 pb-24">
      <div className="mx-auto flex flex-col items-center justify-center px-11">
        <h2 className="mx-auto mb-24 max-w-md text-center text-2xl font-semibold text-white">
          Need custom UI blocks? Contact us.
        </h2>

        <div className="relative">
          {/* Large, very subtle ambient glow - always present */}
          <div
            className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(183,201,83,0.25) 0%, rgba(157,175,47,0.15) 40%, rgba(101,114,35,0.05) 70%, rgba(0,0,0,0) 100%)",
            }}
          />

          {/* Subtle glow animation on hover */}
          <div
            className={`absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl transition-opacity duration-700 ${
              isHovered ? "opacity-40" : "opacity-20"
            }`}
            style={{
              background:
                "radial-gradient(circle, rgba(202,220,88,0.3) 0%, rgba(170,184,60,0.15) 50%, rgba(134,151,33,0.05) 75%, rgba(0,0,0,0) 100%)",
            }}
          />

          {/* Button */}
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative z-10 cursor-pointer rounded-md border border-[#070707] bg-gradient-to-b from-[#D7D794] to-[#F6FF7F] px-6 py-4 text-xs font-medium tracking-wide uppercase transition-all duration-300 sm:px-10 sm:py-5 sm:text-sm md:px-11 md:py-4 md:text-base"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <FeatureSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
    </>
  );
};

export default Home;
