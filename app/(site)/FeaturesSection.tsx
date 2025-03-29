const features = [
  {
    id: 1,
    letter: "R",
    label: "Responsive",
    description: `A library of professionally designed, expertly crafted components
            you can seamlessly integrate into your projects.`,
  },
  {
    id: 2,
    letter: "S",
    label: "SEO Optimised",
    description: `A library of professionally designed, expertly crafted components
            you can seamlessly integrate into your projects.`,
  },
  {
    id: 3,
    letter: "A",
    label: "Accessibility",
    description: `A library of professionally designed, expertly crafted components
            you can seamlessly integrate into your projects.`,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-11 lg:pt-24">
      <div className="max-w-7xl px-16">
        {/* section heading */}
        <div className="mb-11 max-w-xl">
          <p className="text-brand mb-1 text-xs font-semibold uppercase">
            UI Components
          </p>
          <h2 className="mb-6 font-bold tracking-wide text-white lg:text-4xl">
            Beautiful design UI components, built for real-world projects.
          </h2>
          <p className="text-gray-300">
            A library of professionally designed, expertly crafted components
            you can seamlessly integrate into your projects and customize to
            perfection.
          </p>
        </div>
        {/* /section heading end here */}
      </div>
      {/* Features showcase */}
      <div className="border-y border-gray-100/5">
        <div className="max-w-7xl px-11">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              // Calculate if this is first, middle, or last column in a row
              const isFirstColumn = index % 3 === 0;
              const isLastColumn = index % 3 === 2;

              // Apply borders based on position
              const borderClasses = isFirstColumn
                ? "lg:border-r lg:border-gray-100/5" // First column: only right border
                : isLastColumn
                  ? "lg:border-l lg:border-gray-100/5" // Last column: only left border
                  : "lg:border-l lg:border-r border-gray-100/5"; // Middle column: both borders

              return (
                <li key={feature.id} className={`p-6 ${borderClasses}`}>
                  <div className="relative mb-6">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent">
                      {feature.letter}
                    </span>
                    <div className="absolute bottom-2.5 left-5">
                      <h3 className="text-sm font-semibold text-gray-300 uppercase">
                        {feature.label}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">{feature.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Features showcase */}
    </section>
  );
};

export default FeaturesSection;
