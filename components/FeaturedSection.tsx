import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedSection = () => {
  const featuredProjects = [
    {
      id: 1,
      image: "/images/project-one.jpeg",
      title: "Sass AI Template",
      description:
        "Production-grade Turborepo template for Next.js apps, designed to have everything you need to build your new SaaS app as quick as possible.",
      width: 600,
      height: 400,
      price: "$49",
      status: "Live preview",
    },
    {
      id: 2,
      image: "/images/project-two.jpeg",
      title: "Kibo UI",
      description:
        "A custom registry of composable, accessible and open source components designed for use with shadcn/ui.",
      width: 600,
      height: 300,
      price: "$39",
      status: "Live preview",
    },
    {
      id: 3,
      image: "/images/project-three.jpeg",
      title: "Kibo UI",
      description:
        "A custom registry of composable, accessible and open source components designed for use with shadcn/ui.",
      width: 600,
      height: 300,
      price: "$69",
      status: "Live preview",
    },
    {
      id: 4,
      image: "/images/project-one.jpeg",
      title: "Kibo UI",
      description:
        "A custom registry of composable, accessible and open source components designed for use with shadcn/ui.",
      width: 600,
      height: 300,
      price: "$49",
      status: "Live preview",
    },
  ];

  return (
    <section className="relative pb-12 lg:pb-24 bg-[#0F0F0F]">
      {/* Noise Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute top-0 w-full h-px bg-[#D9D9D9]/10" />
      </div>

      <h2 className="relative text-2xl border-b border-[#D9D9D9]/10  uppercase font-semibold text-center text-white tracking-wide py-12  lg:py-20">
        ❤️ Popular Templates
      </h2>

      <div className="relative mx-auto px-8 md:px-20 ">
        <div className="absolute inset-0">
          <div className="absolute z-10 -top-0.5 left-8 md:left-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
          <div className="absolute z-10 -top-0.5 right-8 md:right-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
          <div className="absolute z-10 -bottom-0.5 left-8 md:left-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
          <div className="absolute z-10 -bottom-0.5 right-8 md:right-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
        </div>

        <div className="grid md:grid-cols-2 gap-0 bg-[#d9d9d90d]">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`relative p-8 border-b border-[#D9D9D9]/10 ${
                index % 2 === 0 ? "border-r border-[#D9D9D9]/10" : ""
              } group`}
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-md group-hover:shadow-lg transition-all duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={project.id === 1}
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Buy Now Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="px-6 py-2 bg-white text-gray-900 font-semibold rounded-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-100"
                    aria-label={`Buy ${project.title} now for ${project.price}`}
                  >
                    Buy Now
                  </button>
                </div>
              </div>

              <div className="text-white mt-6 pb-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-green-950 text-green-400 border border-green-800">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mt-3">
                  {project.description}
                </p>
                <p className="mt-3">{project.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="/templates"
        className="mt-12 mx-auto block w-fit px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-md transition-colors duration-300 text-center focus:outline-none focus:ring-2 focus:ring-white/20"
      >
        View all templates
      </Link>
    </section>
  );
};

export default FeaturedSection;
