interface BannerProps {
  title: string;
  description: string;
}

const Banner = ({ title, description }: BannerProps) => {
  return (
    <section className="max-w-7xl mx-auto">
      <div className="relative h-[340px] bg-[url(/images/hero.png)] bg-cover bg-center">
        <div className="h-full flex flex-col items-center justify-center text-center lg:py-44">
          <h2 className="text-xl md:text-2xl uppercase font-semibold tracking-wide text-white mb-3">
            {title}
          </h2>
          <p className="max-w-sm mx-auto text-sm text-zinc-200 mb-8">
            {description}
          </p>

          <div className="flex items-center gap-8 divider-x">
            <p className="flex flex-col gap-1">
              <span className="text-xl font-bold text-white">Production</span>{" "}
              <span className="text-xs uppercase text-white/70">Ready</span>
            </p>
            <p className="flex flex-col gap-1">
              <span className="text-xl font-bold text-white">100%</span>
              <span className="text-xs uppercase text-white/70">
                Responsive
              </span>
            </p>
            <p className="flex flex-col gap-1">
              <span className="text-xl font-bold text-white">SEO</span>
              <span className="text-xs uppercase text-white/70">Opmtimize</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
