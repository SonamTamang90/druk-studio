import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-[url(/images/test.png)] bg-center bg-cover flex flex-col items-center justify-center">
      <div className="max-w-xl mx-auto">
        <div className="flex justify-center">
          <p className="text-white/90 rounded-full py-1 px-3 text-sm border border-[#D9D9D9]/15">
            Made by Druk Digital
          </p>
        </div>
        <h1 className="text-white text-7xl tracking-wider font-extrabold text-center">
          Build your next idea faster
        </h1>
        <p className="text-zinc-400 text-center max-w-lg tracking-wide text-lg mx-auto font-semibold mt-6">
          We craft beautifully designed UI components and tailored templates
          that power exceptional digital experiences.
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
      <div className=""></div>
    </section>
  );
};

export default HeroSection;
