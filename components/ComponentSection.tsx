const projects = [
  {
    id: 1,
    image: "/images/project-one.jpeg",
    title: "Hero Section",
    count: "5 Components",
  },
  {
    id: 2,
    image: "/images/project-two.jpeg",
    title: "Hero Section",
    count: "5 Components",
  },
  {
    id: 3,
    image: "/images/project-three.jpeg",
    title: "Hero Section",
    count: "5 Components",
  },
  {
    id: 4,
    image: "/images/project-one.jpeg",
    title: "Hero Section",
    count: "5 Components",
  },
  {
    id: 5,
    image: "/images/project-one.jpeg",
    title: "Hero Section",
    count: "5 Components",
  },
  {
    id: 6,
    image: "/images/project-one.jpeg",
    title: "Hero Section",
    count: "5 Components",
  },
  // Add more items as needed
];

const ComponentSection = () => {
  return (
    <section className="relative border-t border-[#D9D9D9]/5">
      <div className="max-w-7xl mx-auto px-8 md:px-11 overflow-hidden">
        <div className="">
          <ul
            role="list"
            className="mx-4 inline-flex sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-3"
          >
            {projects.map((project, index) => {
              // Calculate if this is the last item in a row
              const isLastInRow = (index + 1) % 3 === 0;

              return (
                <li
                  key={project.id}
                  className={`inline-flex bg-[#d9d9d90d]/40 w-64 flex-col border-b border-[#D9D9D9]/5 lg:w-auto ${
                    !isLastInRow ? "border-r border-[#D9D9D9]/5" : ""
                  }`}
                >
                  <div className="group cursor-pointer relative p-6">
                    <img
                      alt=""
                      src={project.image}
                      className="aspect-[708/480] w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                    />
                    <div className="mt-6">
                      <p className="text-sm text-white uppercase font-semibold">
                        {project.title}
                      </p>
                      <p className="mt-1 text-zinc-400 text-sm">
                        {project.count}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-px z-10 flex h-100 items-end justify-center bg-linear-to-b to-black pb-8 max-sm:hidden">
        <a
          className="pointer-events-auto gap-2 inline-flex justify-center rounded-full px-4 py-2 text-sm/6 font-semibold bg-[#1E1E1E] border border-[#414146] text-white hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950"
          href="/ui-blocks"
        >
          Browse all components
          <svg
            fill="currentColor"
            aria-hidden="true"
            viewBox="0 0 10 10"
            className="-mr-0.5 w-2.5"
          >
            <path d="M4.85355 0.146423L9.70711 4.99998L4.85355 9.85353L4.14645 9.14642L7.79289 5.49998H0V4.49998H7.79289L4.14645 0.85353L4.85355 0.146423Z"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ComponentSection;
