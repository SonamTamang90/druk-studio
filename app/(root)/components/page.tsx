import ComponentCard from "@/components/cards/ComponentCard";
import ComponentFilter from "@/components/filters/ComponentFilter";
import Container from "@/components/layouts/Container";
import GridContainer from "@/components/layouts/GridContainer";

const components = [
  {
    _id: "1",
    name: "Hero Sections",
    number: "5",
    image: "/mockups/hero.png",
    collection: "Application",
  },
  {
    _id: "2",
    name: "Grids",
    number: "6",
    image: "/mockups/grid.png",
    collection: "Ecommerce",
  },
  {
    _id: "3",
    name: "Pricing Sections",
    number: "5",
    image: "/mockups/pricing.png",
    collection: "Marketing",
  },
  {
    _id: "4",
    name: "Tables",
    number: "4",
    image: "/mockups/table.png",
    collection: "Application",
  },
  {
    _id: "5",
    name: "Testimonial Sections",
    number: "4",
    image: "/mockups/testimonial.png",
    collection: "Ecommerce",
  },
  {
    _id: "6",
    name: "Form",
    number: "3",
    image: "/mockups/form.png",
    collection: "Marketing",
  },
  {
    _id: "7",
    name: "Form",
    number: "3",
    image: "/mockups/testimonial.png",
    collection: "Marketing",
  },
];

const Banner = () => {
  return (
    <section className="bg-hero relative h-80 bg-cover bg-top">
      <div className="from-brand/0 via-brand/40 to-brand/0 absolute inset-x-1 -bottom-px h-px bg-linear-to-r" />
      <div className="mx-auto flex h-full max-w-7xl items-center px-8 pt-16 md:pt-20 lg:px-11 lg:pt-24">
        <div className="max-w-4xl">
          <h2 className="text-light-100 text-xl leading-11 font-semibold tracking-wide md:text-2xl lg:text-3xl">
            A library with 50+ UI components to meet any website design and
            development need.
          </h2>
        </div>
      </div>
    </section>
  );
};

interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] }>;
}

const Components = async ({ searchParams }: SearchParams) => {
  const { filter = "" } = await searchParams;

  const filteredComponents = components.filter((component) => {
    const matchesFilter = filter
      ? component.collection.toLowerCase() === filter.toLowerCase()
      : "application";

    return matchesFilter;
  });
  return (
    <>
      <Banner />
      <ComponentFilter />
      <Container>
        <GridContainer>
          {filteredComponents.map(({ _id, name, number, image }) => (
            <ComponentCard
              key={_id}
              _id={_id}
              name={name}
              number={number}
              image={image}
            />
          ))}
        </GridContainer>
      </Container>
    </>
  );
};

export default Components;
