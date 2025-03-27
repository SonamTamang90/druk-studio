import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React from "react";
import Container from "./Container";
import Image from "next/image";

const tabData = [
  {
    name: "Sass",
    items: [
      {
        image: "/images/project-one.jpeg",
        title: "Nimbus",
        category: "Sass Marketing Templates",
        description:
          "Nimbus provides premium, conversion-focused marketing templates for SaaS businesses. Ready-to-deploy designs that drive results while maintaining brand consistency across all touchpoints.",
        pages: "4",
        price: "$59",
        originalPrice: "$A99",
      },
      {
        image: "/images/project-two.jpeg",
        title: "Supply",
        category: "eCommerce",
        description:
          "Nimbus provides premium, conversion-focused marketing templates for SaaS businesses. Ready-to-deploy designs that drive results while maintaining brand consistency across all touchpoints.",
        price: "$59",
        originalPrice: "$99",
        pages: "3",
      },
      {
        image: "/images/project-three.jpeg",
        title: "Supply",
        category: "eCommerce",
        description:
          "Nimbus provides premium, conversion-focused marketing templates for SaaS businesses. Ready-to-deploy designs that drive results while maintaining brand consistency across all touchpoints.",
        price: "$59",
        originalPrice: "$99",
        pages: "4",
      },
      {
        image: "/images/project-three.jpeg",
        title: "Supply",
        category: "eCommerce",
        description:
          "Nimbus provides premium, conversion-focused marketing templates for SaaS businesses. Ready-to-deploy designs that drive results while maintaining brand consistency across all touchpoints.",
        price: "$59",
        originalPrice: "$99",
        pages: "4",
      },
    ],
  },
  {
    name: "Portfolio",
    items: [
      // Portfolio tab content would go here
      // Example placeholder
      {
        image: "/images/project-two.jpeg",
        title: "Creative Portfolio",
        category: "Portfolio",
        price: "$49",
        originalPrice: "$79",
      },
    ],
  },
  {
    name: "Blogging",
    items: [
      // Ecommerce tab content would go here
    ],
  },
];

const Tabs = () => {
  return (
    <div className="">
      <TabGroup>
        <Container>
          <TabList className="flex items-center justify-center gap-4 md:gap-8 overscroll-x-autoauto lg:py-11">
            {tabData.map((tab) => (
              <Tab
                key={tab.name}
                className="text-white border border-[#D9D9D9]/15 text-xs uppercase py-2 px-4 rounded-full focus:outline-none cursor-pointer data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {tab.name}
              </Tab>
            ))}
          </TabList>
        </Container>
        <div className="max-w-7xl mx-auto lg:px-11">
          <TabPanels className="">
            {tabData.map((tab, index) => (
              <TabPanel key={index}>
                <ul className="grid grid-cols-1 md:grid-cols-1 -mx-px">
                  {tab.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex gap-6 border-b border-[#D9D9D9]/10 overflow-hidden group cursor-pointer"
                    >
                      <div className="py-6 pl-6 border-r pr-6 border-[#D9D9D9]/10">
                        <div className="relative h-72 w-96">
                          <Image
                            src={item.image}
                            alt={item.title}
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:opacity-75"
                          />
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col justify-between gap-11 items-start py-6 border-l border-[#D9D9D9]/10">
                        <div className="pl-6">
                          <h3 className="mb-2 text-white">{item.title}</h3>
                          <p className="text-sm text-zinc-400">
                            {item.category}
                          </p>
                          <p className="text-zinc-400 max-w-md text-sm my-6">
                            {item.description}
                          </p>
                          <div>
                            <h3 className="text-white text-sm uppercase font-semibold mb-4">
                              Includes
                            </h3>
                            <div className="grid grid-cols-3 gap-y-6">
                              <p className="text-sm">
                                <span className="text-white font-semibold">
                                  {item.pages}
                                </span>{" "}
                                <span className="text-white/90">Pages</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="border-t border-[#D9D9D9]/10 w-full pt-6 pl-6">
                          <p className="space-x-2">
                            <span className="text-xl text-white font-bold">
                              {item.originalPrice}
                            </span>
                            <span className="text-sm text-zinc-400">
                              or included with all-access
                            </span>
                            {/* <span className="line-through text-zinc-400">
                            {item.originalPrice}
                          </span> */}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </div>
      </TabGroup>
    </div>
  );
};

export default Tabs;
