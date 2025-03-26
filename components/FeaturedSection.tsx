import Container from "./Container";

const FeaturedSection = () => {
  return (
    <section className="">
      <Container background="#d9d9d90d">
        <div className="">
          <h2 className="text-xl text-center md:text-2xl uppercase font-semibold text-white tracking-wide py-16">
            Everything Our Templates Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-[#D9D9D9]/15">
            <div className="px-5 pt-6 pb-20 md:border-r border-b border-[#D9D9D9]/15">
              <div className="relative">
                <span className="font-extrabold text-6xl bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                  R
                </span>
                <div className="absolute bottom-3 left-5 text-xl">
                  <h3 className="text-base text-white font-semibold ml-1 uppercase">
                    Responsive
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#808080] max-w-xs mt-5">
                The templates are fully responsive across all devices, ensuring
                optimal viewing and interaction experiences regardless of screen
                size or platform.
              </p>
            </div>
            <div className="px-5 pt-6 pb-20 border-b border-[#D9D9D9]/15">
              <div className="relative">
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text font-extrabold text-6xl">
                  S
                </span>
                <div className="absolute bottom-3 left-5.5 text-xl">
                  <h3 className="text-base text-white font-semibold ml-1">
                    SEO
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#808080] max-w-xs mt-6">
                Each element is strategically crafted to improve visibility in
                search results and connect your business with the audiences that
                matter most.
              </p>
            </div>
            <div className="px-5 pt-6 pb-20 border-b md:border-r border-[#D9D9D9]/15">
              <div className="relative">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text font-extrabold text-6xl">
                  A
                </span>
                <div className="absolute bottom-3 left-6">
                  <h3 className="text-base text-white font-semibold ml-1 uppercase">
                    Accessibility
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#808080] max-w-xs mt-6">
                Each element is strategically crafted to improve visibility in
                search results and connect your business with the audiences that
                matter most.
              </p>
            </div>
            <div className="px-5 pt-6 pb-20 border-b border-[#D9D9D9]/15">
              <div className="relative">
                <span className="bg-gradient-to-r from-green-500 to-cyan-400 text-transparent bg-clip-text font-extrabold text-6xl">
                  D
                </span>
                <div className="absolute bottom-4 left-6.5">
                  <h3 className="text-base text-white font-semibold ml-1 uppercase">
                    Documents
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#808080] max-w-xs mt-6">
                Each element is strategically crafted to improve visibility in
                search results and connect your business with the audiences that
                matter most.
              </p>
            </div>
            <div className="px-5 pt-6 pb-20 border-b md:border-b-0 md:border-r border-[#D9D9D9]/15">
              <div className="relative">
                <span className="bg-gradient-to-r from-amber-500 to-yellow-300 text-transparent bg-clip-text font-extrabold text-6xl">
                  F
                </span>
                <div className="absolute bottom-4 left-8">
                  <h3 className="text-base text-white font-semibold ml-1 uppercase">
                    Figma Design
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#808080] max-w-xs mt-6">
                Each element is strategically crafted to improve visibility in
                search results and connect your business with the audiences that
                matter most.
              </p>
            </div>
            <div className="px-5 pt-6 pb-20">
              <div className="relative">
                <span className="bg-gradient-to-r from-rose-500 to-fuchsia-500 text-transparent bg-clip-text font-extrabold text-6xl">
                  P
                </span>
                <div className="absolute bottom-3 left-5">
                  <h3 className="text-base text-white font-semibold ml-1 uppercase">
                    Picture
                  </h3>
                </div>
              </div>
              <p className="text-sm text-[#808080] max-w-xs mt-6">
                Each element is strategically crafted to improve visibility in
                search results and connect your business with the audiences that
                matter most.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedSection;
