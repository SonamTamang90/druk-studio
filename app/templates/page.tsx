"use client";

import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

// Sample template data
const templates = [
  {
    id: 1,
    title: "Dashboard Template",
    category: "react",
    image: "/images/template1.jpg",
  },
  {
    id: 2,
    title: "E-commerce Store",
    category: "nextjs",
    image: "/images/template2.jpg",
  },
  {
    id: 3,
    title: "Blog Layout",
    category: "tailwind",
    image: "/images/template3.jpg",
  },
  {
    id: 4,
    title: "Admin Panel",
    category: "react",
    image: "/images/template4.jpg",
  },
  {
    id: 5,
    title: "Portfolio Site",
    category: "nextjs",
    image: "/images/template5.jpg",
  },
  {
    id: 6,
    title: "Landing Page",
    category: "tailwind",
    image: "/images/template6.jpg",
  },
];

const TemplatesPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories = {
    all: templates,
    react: templates.filter((template) => template.category === "react"),
    nextjs: templates.filter((template) => template.category === "nextjs"),
    tailwind: templates.filter((template) => template.category === "tailwind"),
  };

  // Custom button class for tabs
  const getTabClassName = (selected) => {
    return `btn ${
      selected ? "bg-white text-black" : "bg-transparent text-white"
    } border border-white/20 px-4 py-2 rounded focus:outline-none transition-all cursor-pointer`;
  };

  return (
    <div className="lg:pt-20">
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
      <div className="max-w-7xl mx-auto lg:px-20">
        {/* Page Header */}
        <div className="relative flex items-center justify-center h-[250px] bg-[url(/images/bg.png)] bg-cover bg-center">
          <div
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="relative text-white text-center">
            <h2 className="text-xl md:text-3xl mb-6 uppercase font-semibold tracking-wide">
              Beautifully crafted templates
            </h2>
            <p className="max-w-md mx-auto">
              Expertly crafted templates combining beautiful design with clean
              code. Build stunning projects faster.
            </p>
          </div>
        </div>
      </div>

      {/* Filters using Headless UI */}
      <div className="relative text-white border-y border-[#D9D9D9]/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute z-10 -top-0.5 left-8 md:left-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
          <div className="absolute z-10 -top-0.5 right-8 md:right-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
          <div className="absolute z-10 -bottom-0.5 left-8 md:left-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
          <div className="absolute z-10 -bottom-0.5 right-8 md:right-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
        </div>
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex items-center justify-center py-11 space-x-4 relative z-10 cursor-pointer">
            <Tab className={({ selected }) => getTabClassName(selected)}>
              All
            </Tab>
            <Tab className={({ selected }) => getTabClassName(selected)}>
              React
            </Tab>
            <Tab className={({ selected }) => getTabClassName(selected)}>
              Next.js
            </Tab>
            <Tab className={({ selected }) => getTabClassName(selected)}>
              Tailwind CSS
            </Tab>
          </Tab.List>
        </Tab.Group>
      </div>

      {/* Content area for templates */}
      <div className="border-b border-[#D9D9D9]/10 relative">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#D9D9D9]/10 z-0"></div>
        <div className="absolute z-10 -bottom-0.5 left-8 md:left-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
        <div className="absolute z-10 -bottom-0.5 right-8 md:right-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="hidden">
            <Tab>All</Tab>
            <Tab>React</Tab>
            <Tab>Next.js</Tab>
            <Tab>Tailwind CSS</Tab>
          </Tab.List>
          <Tab.Panels className="max-w-7xl mx-auto px-4 lg:px-20 py-16">
            <Tab.Panel>
              <TemplateGrid templates={categories.all} />
            </Tab.Panel>
            <Tab.Panel>
              <TemplateGrid templates={categories.react} />
            </Tab.Panel>
            <Tab.Panel>
              <TemplateGrid templates={categories.nextjs} />
            </Tab.Panel>
            <Tab.Panel>
              <TemplateGrid templates={categories.tailwind} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

// Template Grid Component
const TemplateGrid = ({ templates }) => {
  return (
    <AnimatePresence>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#111] border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-all"
          >
            <div className="h-48 bg-gray-800 relative overflow-hidden">
              <img
                src={template.image || "/images/placeholder.jpg"}
                alt={template.title}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <button className="bg-white text-black px-4 py-2 rounded text-sm font-medium cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-white text-lg font-medium">
                {template.title}
              </h3>
              <div className="flex items-center mt-2">
                <span className="text-xs uppercase text-gray-400 bg-gray-800 px-2 py-1 rounded">
                  {template.category}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  );
};

export default TemplatesPage;

// const TemplatesPage = () => {
//   return (
//     <div className="lg:pt-20">
//       <div
//         className="absolute inset-0 z-0 opacity-[0.03]"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//           backgroundRepeat: "repeat",
//         }}
//       />
//       <div className="max-w-7xl mx-auto lg:px-20">
//         {/* Page Header */}
//         <div className="relative flex items-center justify-center h-[250px] bg-[url(/images/bg.png)] bg-cover bg-center">
//           <div
//             className="absolute inset-0 z-0 opacity-[0.03]"
//             style={{
//               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//               backgroundRepeat: "repeat",
//             }}
//           />
//           <div className="absolute inset-0 bg-black/70" />
//           <div className="relative text-white text-center">
//             <h2 className="text-xl md:text-3xl mb-6 uppercase font-semibold  tracking-wide">
//               Beautifully crafted templates
//             </h2>
//             <p className="max-w-md mx-auto">
//               Expertly crafted templates combining beautiful design with clean
//               code. Build stunning projects faster.
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* Filters */}
//       <div className="relative text-white border-y border-[#D9D9D9]/10">
//         <div className="absolute inset-0">
//           <div className="absolute z-10 -top-0.5 left-8 md:left-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
//           <div className="absolute z-10 -top-0.5 right-8 md:right-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
//           <div className="absolute z-10 -bottom-0.5 left-8 md:left-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
//           <div className="absolute z-10 -bottom-0.5 right-8 md:right-[78.5px] w-[4px] h-[4px] bg-white transform -rotate-45" />
//         </div>
//         <div className="flex items-center justify-center py-11 space-x-4">
//           <button className="btn btn-primary">All</button>
//           <button className="btn btn-primary">React</button>
//           <button className="btn btn-primary">Next.js</button>
//           <button className="btn btn-primary">Tailwind CSS</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TemplatesPage;
