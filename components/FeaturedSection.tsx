import Image from "next/image";
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
    <section className="relative lg:pb-24 bg-[#0F0F0F]">
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
        <div className="absolute left-8 md:left-20 w-px h-full bg-[#D9D9D9]/10" />
        <div className="absolute right-8 md:right-20 w-px h-full bg-[#D9D9D9]/10" />
      </div>

      <h2 className="relative text-2xl border-b border-[#D9D9D9]/10  uppercase font-semibold text-center text-white tracking-wide  py-20">
        ❤️ Popular Templates
      </h2>

      <div className="relative mx-auto px-8 md:px-20 ">
        <div className="grid md:grid-cols-2 gap-0 bg-[#d9d9d90d]">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`relative p-8 border-b border-[#D9D9D9]/10 ${
                index % 2 === 0 ? "border-r border-[#D9D9D9]/10" : ""
              }`}
            >
              <div className="relative aspect-video w-full overflow-hidden bg-gray-900/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={project.id === 1}
                />
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
    </section>
  );
};

export default FeaturedSection;
