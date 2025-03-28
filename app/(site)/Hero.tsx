import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[url(/images/hero-bg.png)] bg-cover bg-center">
      <div className="max-w-7xl px-11">
        {/* Hero text */}
        <div className="mx-auto max-w-xl text-center">
          <div className="inline-block rounded-full border border-[#D9D9D9]/15 px-4 py-1 text-sm text-[#CFCFCF]">
            <span>Made by Druk Digital</span>
          </div>
          <h1 className="mb-6 text-5xl font-extrabold tracking-wide text-white sm:text-6xl lg:text-7xl">
            Ship your idea even faster
          </h1>
          <p className="text-base text-[#CFCFCF] md:text-lg lg:px-11">
            We craft beautifully designed UI components and tailored templates
            that power exceptional digital experiences.
          </p>
        </div>
        {/* /Hero text end here */}
        <div className="mt-11 flex items-center justify-center gap-6">
          <Link
            href="/ui-blocks"
            className="inline-block rounded-md bg-[#FFFFA9] px-6 py-3 text-sm font-semibold"
          >
            Browse UI Blocks
          </Link>
          <Link
            href="/ui-blocks"
            className="inline-block rounded-md border border-[#414146] bg-[#1E1E1E] px-6 py-3 text-sm font-semibold text-white"
          >
            Explore Templates
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
