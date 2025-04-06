import ComponentCard from "@/components/cards/ComponentCard";
import CenteredFaq from "@/components/faq/CenteredFaq";
import Image from "next/image";
import Link from "next/link";

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

const faqs = [
  {
    question: "How do I install and get started with Druk UI?",
    answer:
      "Druk UI doesn't require installation. Simply copy the component code from our documentation and paste it directly into your React project. Make sure you have React and Tailwind CSS already set up in your project. Our components use only standard Tailwind CSS classes, so there's no need for additional configuration or dependencies.",
  },
  {
    question: "Are Druk UI components customizable?",
    answer:
      "Yes! All components are built with standard Tailwind CSS classes and React patterns. You can easily modify the appearance by editing the Tailwind classes or extend functionality by adding your own React props and state. The code is designed to be readable and modification-friendly, following best practices for both React and Tailwind.",
  },
  {
    question: "Will Druk UI components affect my application's performance?",
    answer:
      "Druk UI is designed with performance in mind. Since you're copying only the components you need directly into your codebase, there's no additional bundle size from unused components. Each component is optimized for rendering performance and follows React best practices. For larger applications, you can easily adapt the components to use React.memo or other optimization techniques.",
  },
  {
    question: "How do I stay updated with new Druk UI components and features?",
    answer:
      "The best way to stay informed is to subscribe to our newsletter. Simply enter your email on our website's subscription form to receive regular updates about new components, usage tips, and early access to upcoming features. Our newsletter subscribers are the first to know about Druk UI updates and occasionally receive exclusive content and resources. You can also visit our documentation site for the latest changes and follow our GitHub repository for code-level updates.",
  },
];

const Hero = () => {
  return (
    <section className="bg-hero h-screen bg-cover bg-center">
      <div className="max-w-7x mx-auto flex h-full flex-col items-center justify-center px-8 lg:px-11">
        <div className="max-w-xl text-center">
          <span className="text-brand bg-brand/15 mb-4 inline-block rounded-full border-white/15 px-2 py-1 text-sm">
            Components for React and Tailwind
          </span>
          <h1 className="mb-6 text-4xl leading-20 font-extrabold text-white lg:text-6xl">
            Design Engineers Toolkit
          </h1>
          <p className="text-light-300 text-base">
            Comprehensive toolkit helps developers build stunning interfaces and
            websites in record time with pixel-perfect precision.
          </p>
        </div>
        <div className="mt-11 space-x-6">
          <Link
            href="/templates"
            className="bg-brand inline-block rounded-md px-6 py-3 font-semibold transition-opacity hover:opacity-75"
          >
            Buy License
          </Link>
          <Link
            href="/templates"
            className="bg-dark-400 border-light-300/15 inline-block rounded-md border px-6 py-3 font-semibold text-white transition-opacity hover:opacity-75"
          >
            Explore Components
          </Link>
        </div>
      </div>
    </section>
  );
};

const Feature = () => {
  return (
    <section className="py-11 lg:py-20">
      <div className="max-w-7x mx-auto px-8 lg:px-11">
        <div className="mb-11 max-w-lg">
          <h2 className="text-light-100 mb-6 text-3xl font-semibold">
            Professional UI components for Real-World projects
          </h2>
          <p className="text-light-300 text-lg">
            A library with 50+ UI components to meet any website design and
            development need.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-dark-700 border-light-300/15 rounded-md border p-6">
            <div className="relative mb-4">
              <span className="inline-block bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent">
                R
              </span>
              <h3 className="absolute bottom-2 left-6.5 text-white uppercase">
                Responsive
              </h3>
            </div>
            <p className="text-light-400">
              Components that automatically resize and reorganize for all screen
              sizes.
            </p>
          </div>
          <div className="bg-dark-700 border-light-300/15 rounded-md border p-6">
            <div className="relative mb-4">
              <span className="inline-block bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent">
                A
              </span>
              <h3 className="absolute bottom-2 left-6.5 text-white uppercase">
                Accessibility
              </h3>
            </div>
            <p className="text-light-400">
              Inclusive components ensuring equal access for all users and
              assistive technologies.
            </p>
          </div>
          <div className="bg-dark-700 border-light-300/15 rounded-md border p-6">
            <div className="relative mb-4">
              <span className="inline-block bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent">
                S
              </span>
              <h3 className="absolute bottom-2 left-6.5 text-white uppercase">
                Seo Optimized
              </h3>
            </div>
            <p className="text-light-400">
              Inclusive components ensuring equal access for all users and
              assistive technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Components = () => {
  return (
    <section className="lg:pb-20">
      <div className="border-light-100/5 border-t px-8 py-4 lg:px-11">
        <p className="text-light-400">
          UI Components for Marketing, Applications and Ecommerce
        </p>
      </div>
      <div className="border-light-100/5 -mb-px border-y">
        <div className="mx-auto max-w-7xl px-8 lg:px-11">
          <div className="border-light-100/5 grid grid-cols-1 border-l lg:grid-cols-3">
            {components.map(({ _id, name, number, image }) => (
              <ComponentCard
                key={_id}
                _id={_id}
                name={name}
                number={number}
                image={image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  return (
    <section className="pb-11 lg:pb-20">
      <div className="mx-auto max-w-7xl px-8 lg:px-11">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-light-100 mb-6 text-3xl font-semibold">
            Frequently asked questions
          </h2>
          <p className="text-light-300 text-lg">
            Everything you need to know about our product and payment options.
            If you have any questions, don't hesitate to reach out to us.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <dl className="divide-light-100/5 mt-10 space-y-6 divide-y">
            {faqs.map((faq) => (
              <CenteredFaq
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Components />
      <FAQ />
    </>
  );
};

export default Home;
