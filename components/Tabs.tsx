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
        category: "AI Sass",
        price: "$59",
        originalPrice: "$99",
      },
      {
        image: "/images/project-two.jpeg",
        title: "Supply",
        category: "eCommerce",
        price: "$59",
        originalPrice: "$99",
      },
      {
        image: "/images/project-three.jpeg",
        title: "Supply",
        category: "eCommerce",
        price: "$59",
        originalPrice: "$99",
      },
      {
        image: "/images/project-three.jpeg",
        title: "Supply",
        category: "eCommerce",
        price: "$59",
        originalPrice: "$99",
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
          <TabList className="flex items-center justify-center gap-4 md:gap-8 overscroll-x-autoauto">
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
        <div className="max-w-7xl mx-auto px-8 lg:px-20">
          <TabPanels className="bg-[#d9d9d90d]">
            {tabData.map((tab, index) => (
              <TabPanel key={index} className="text-white">
                <ul className="grid grid-cols-1 md:grid-cols-2 -mx-px">
                  {tab.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="border-r border-b border-[#D9D9D9]/10 overflow-hidden p-8 group cursor-pointer"
                    >
                      <div className="relative h-72 w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="group-hover:opacity-75"
                        />
                      </div>
                      <div className="flex items-center justify-between mt-6">
                        <div>
                          <h3 className="mb-2">{item.title}</h3>
                          <p className="text-sm text-zinc-400">
                            {item.category}
                          </p>
                        </div>
                        <p className="text-sm space-x-2">
                          <span>{item.price}</span>
                          <span className="line-through text-zinc-400">
                            {item.originalPrice}
                          </span>
                        </p>
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
