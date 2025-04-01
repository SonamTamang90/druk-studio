import Button from "@/components/ui/Button";

const Hero: React.FC = () => {
  return (
    <section className="h-lvh bg-[url(/images/hero-bg.png)] bg-cover bg-center">
      <div className="flex h-full flex-col items-center justify-center space-y-11">
        {/* Hero text */}
        <div className="max-w-xl text-center">
          <h1 className="font-extrabold tracking-wide text-white lg:text-7xl">
            Ship design even faster
          </h1>
          <p className="mt-6 text-zinc-200 lg:px-11">
            Our comprehensive toolkit helps developers build stunning interfaces
            and websites in record time.
          </p>
        </div>
        {/* Hero CTA */}
        <div className="flex items-center justify-center space-x-6">
          <Button variant="primary" href="/ui-blocks">
            Browse UI Blocks
          </Button>
          <Button variant="secondary" href="/templates">
            Explore Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
