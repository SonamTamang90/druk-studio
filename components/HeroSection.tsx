import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-[url(/images/test.png)] h-screen bg-cover bg-center overflow-hidden">
      <div className="max-w-7xl mx-auto lg:px-11 lg:py-44">
        <div className="pl-6">
          <h1 className="lg:text-lg uppercase tracking-wide text-white mb-6">
            Druk Digital Studio
          </h1>
          <p className="text-white text-6xl max-w-2xl font-extrabold">
            Ship faster with ready made components.
          </p>
          <p className="max-w-md text-lg text-white/40 mt-8">
            We craft beautifully designed components and tailored templates that
            power exceptional digital experiences.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row mt-11 pl-6">
          <Link
            href="/book-call"
            className="inline-flex items-center text-sm font-semibold justify-center px-6 py-3 text-black transition-all duration-300 bg-[#FFFFA9] rounded-md hover:bg-yellow-400 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            aria-label="Book a call with our team"
          >
            Explore Templates
          </Link>
          <Link
            href="/our-work"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-[#1E1E1E] border border-[#414146] rounded-md hover:bg-zinc-700 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
            aria-label="View our work portfolio"
          >
            Browse UI Blocks
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

{
  /* <section className="bg-[url(/images/test.png)] bg-cover bg-center h-[80vh]">
      <div className="max-w-7xl mx-auto px-24 lg:py-44">
        <h1 className="lg:text-6xl text-white tracking-wide uppercase font-extrabold mb-6">
          Druk Web Digital <br /> Studio
        </h1>
        <p className="text-white/70 max-w-md">
          {" "}
          We craft beautifully designed components and tailored templates that
          power exceptional digital experiences. Build your next idea even
          faster with our streamlined solutions.
        </p>
      
        <div className="flex flex-col items-center gap-4 sm:flex-row mt-11">
          <Link
            href="/book-call"
            className="inline-flex items-center text-sm font-semibold justify-center px-6 py-3 text-black transition-all duration-300 bg-[#FFFFA9] rounded-md hover:bg-yellow-400 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            aria-label="Book a call with our team"
          >
            Explore Templates
          </Link>
          <Link
            href="/our-work"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-[#1E1E1E] border border-[#414146] rounded-md hover:bg-zinc-700 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
            aria-label="View our work portfolio"
          >
            Browse UI Blocks
          </Link>
        </div>
      </div>
    </section>  */
}
