import Container from "@/components/Container";
import GridContainer from "@/components/GridContainer";
import Link from "next/link";

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

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-[url(/images/hero-bg.png)] bg-cover bg-center">
      <div className="absolute inset-0 bg-[url(/bg-noise.png)] opacity-10" />
      <Container>
        <div className="flex h-full flex-col items-center justify-center">
          <div className="mb-1 rounded-full border border-white/15 px-1.5 py-1">
            <p className="text-xs text-zinc-200">Made by Druk Digital</p>
          </div>
          <h1 className="max-w-lg text-center text-5xl font-extrabold tracking-wide text-white lg:text-7xl">
            Ship design even faster
          </h1>
          <p className="mt-6 max-w-md text-center text-zinc-200">
            Our comprehensive toolkit helps developers build stunning interfaces
            and websites in record time.
          </p>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-6 md:flex-nowrap">
            <Link
              href="/ui-blocks"
              className="bg-brand rounded-md px-6 py-3 text-sm"
            >
              Browse UI Blocks
            </Link>
            <Link
              href="/templates"
              className="rounded-md border border-zinc-700/60 bg-zinc-950 px-6 py-3 text-sm text-white"
            >
              Explore Templates
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

const Features: React.FC = () => {
  return (
    <section className="py-11 lg:py-24">
      <Container>
        <h2 className="max-w-md text-xl font-semibold text-white lg:text-3xl">
          Professional UI Components Built for Real-World Success
        </h2>
        <p className="mt-6 mb-11 max-w-md text-zinc-400">
          A library with 50+ UI components to meet any website design and
          development need.
        </p>
      </Container>
      {/* Features */}
      <div className="border-neutrals-100/5 relative border-y py-11">
        <GridContainer />
        <Container>
          <div className="grid grid-cols-3 gap-x-11">
            {features.map((feature) => (
              <div key={feature.letter} className="px-4 last:pl-8">
                <div className="relative mb-6">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent">
                    {feature.letter}
                  </span>
                  <div className="absolute bottom-2 left-2.5 text-xl">
                    <h3 className="ml-1 text-sm font-semibold text-white uppercase">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-balance text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
};

export default Home;
