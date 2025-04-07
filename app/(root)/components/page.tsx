import ComponentCard from "@/components/cards/ComponentCard";
import Container from "@/components/layouts/Container";
import GridContainer from "@/components/layouts/GridContainer";

const components = [
  {
    _id: "1",
    name: "Hero Sections",
    number: "5",
    image: "/mockups/hero.png",
  },
  {
    _id: "2",
    name: "Grids",
    number: "6",
    image: "/mockups/grid.png",
  },
  {
    _id: "3",
    name: "Pricing Sections",
    number: "5",
    image: "/mockups/pricing.png",
  },
  {
    _id: "4",
    name: "Tables",
    number: "4",
    image: "/mockups/table.png",
  },
  {
    _id: "5",
    name: "Testimonial Sections",
    number: "4",
    image: "/mockups/testimonial.png",
  },
  {
    _id: "6",
    name: "Form",
    number: "3",
    image: "/mockups/form.png",
  },
];

const Banner = () => {
  return (
    <section className="bg-hero relative h-80 bg-cover bg-top">
      <div className="from-brand/0 via-brand/40 to-brand/0 absolute inset-x-1 -bottom-px h-px bg-linear-to-r" />
      <div className="mx-auto flex h-full max-w-7xl items-center px-8 lg:px-11 lg:pt-24">
        <div className="max-w-4xl">
          <h2 className="text-light-100 text-3xl leading-11 font-semibold tracking-wide">
            Completely unstyled, fully accessible UI components, designed to
            integrate beautifully with Tailwind CSS.
          </h2>
        </div>
      </div>
    </section>
  );
};

const page = () => {
  return (
    <>
      <Banner />
      <Container>
        <GridContainer>
          {components.map(({ _id, name, number, image }) => (
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

export default page;
