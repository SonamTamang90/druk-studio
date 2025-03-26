import React from "react";

const AboutSection = () => {
  const designServices = [
    "Landing Pages",
    "Websites",
    "UI/UX Design",
    "Visual Identity",
    "Figma Prototyping",
  ];

  const developmentServices = [
    "HTML/CSS/JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Responsive Design",
  ];

  const industries = [
    "E-commerce",
    "SaaS",
    "Startups",
    "Tech",
    "Digital Products",
    "Creative Agencies",
  ];

  return (
    <section className="relative py-12 lg:py-24 bg-[#0F0F0F] text-white overflow-hidden">
      {/* <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      /> */}

      <div className="relative mx-auto px-14 md:px-11">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left column - Main content */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-xl md:text-2xl uppercase font-semibold text-white tracking-wide">
              Code, Design, Innovation — Our Digital Vision
            </h2>

            <div className="space-y-6 text-zinc-400">
              <p className="text-base leading-relaxed">
                Druk Web Design Studio crafts premium responsive websites and
                modern React components with meticulous attention to performance
                and user experience.
              </p>
              <p className="text-base leading-relaxed">
                Our specialized approach combines clean JavaScript code with
                Tailwind CSS styling to deliver pixel-perfect interfaces that
                adapt seamlessly to any device, empowering your digital presence
                through intelligent design principles.
              </p>
            </div>
          </div>

          {/* Space between */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Right column - Services */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Design Column */}
              <div className="space-y-5">
                <div
                  className="flex items-center gap-2.5 w-fit py-2 px-4 rounded-full backdrop-blur-md border border-white/10 shadow-lg"
                  style={{
                    backgroundColor: "rgba(15, 15, 15, 0.6)",
                    boxShadow:
                      "0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <p className="uppercase text-sm font-medium text-white tracking-wider">
                    Design
                  </p>
                </div>
                <ul className="space-y-2 pl-1">
                  {designServices.map((service, index) => (
                    <li key={index} className="text-zinc-300 text-base">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Development Column */}
              <div className="space-y-5">
                <div
                  className="flex items-center gap-2.5 w-fit py-2 px-4 rounded-full backdrop-blur-md border border-white/10 shadow-lg"
                  style={{
                    backgroundColor: "rgba(15, 15, 15, 0.5)",
                    boxShadow:
                      "0 4px 20px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                  <p className="uppercase text-sm font-medium text-white tracking-wider">
                    Tech Stack
                  </p>
                </div>
                <ul className="space-y-2 pl-1">
                  {developmentServices.map((service, index) => (
                    <li key={index} className="text-zinc-300 text-base">
                      {service}
                    </li>
                  ))}
                </ul>

                <div className="pt-10">
                  <div
                    className="flex items-center gap-2.5 w-fit py-2 px-4 rounded-full backdrop-blur-md border border-white/10 shadow-lg"
                    style={{
                      backgroundColor: "rgba(15, 15, 15, 0.6)",
                      boxShadow:
                        "0 4px 20px rgba(0, 0, 0, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    <p className="uppercase text-sm font-medium text-white tracking-wider">
                      Industries
                    </p>
                  </div>
                  <ul className="mt-5 space-y-2 pl-1">
                    {industries.map((industry, index) => (
                      <li key={index} className="text-zinc-300 text-base">
                        {industry}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
