"use client";

import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const filters = [
  {
    name: "Application",
    value: "application",
    collections: "6",
  },
  {
    name: "Marketing",
    value: "marketing",
    collections: "7",
  },
  {
    name: "Ecommerce",
    value: "ecommerce",
    collections: "4",
  },
];

const ComponentFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");
  const [active, setActive] = useState(filterParams || "");

  const handleTabClick = (filter: string) => {
    let newUrl = "";
    if (filter === active) {
      setActive("");
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      setActive(filter);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="border-light-300/5 flex-wrap gap-3 border-y px-8 py-6 sm:flex lg:px-11">
      {filters.map((filter) => (
        <button
          key={filter.name}
          className={`flex cursor-pointer items-center gap-2 rounded-full px-6 py-2 font-semibold ${active === filter.value ? "bg-dark-400 border-light-300/15 border text-white" : "text-light-400 bg-dark-700 border-light-300/15 border"}`}
          onClick={() => handleTabClick(filter.value)}
        >
          {filter.name}
          <span className="text-brand/70 text-xs">{filter.collections}</span>
        </button>
      ))}
    </div>
  );
};

export default ComponentFilter;
