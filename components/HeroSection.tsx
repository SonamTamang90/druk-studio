import Navigation from "./Navigation";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[60vh] lg:h-screen overflow-hidden bg-black"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-one.png"
          alt="Background design"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover opacity-70 grayscale"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
        <h1
          id="hero-heading"
          className="max-w-3xl mb-4 text-4xl font-bold text-center sm:text-5xl md:text-6xl uppercase tracking-wider"
        >
          Druk Web Design Studio
        </h1>
        <p className="max-w-md mb-10 text-base text-center sm:text-lg md:text-base opacity-90">
          We craft digital experiences with clean code and smart design,
          building interfaces that reach millions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/book-call"
            className="inline-flex items-center text-sm font-semibold justify-center px-6 py-3 text-black transition-all duration-300 bg-[#FFFFA9] rounded-md hover:bg-yellow-400 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            aria-label="Book a call with our team"
          >
            BOOK A CALL
          </Link>
          <Link
            href="/our-work"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-[#1E1E1E] border border-[#414146] rounded-md hover:bg-zinc-700 hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2"
            aria-label="View our work portfolio"
          >
            OUR WORK
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
