import { Quote } from "lucide-react";
import React from "react";

const TestimonialSection = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto lg:px-11 pb-24">
        <h2 className="text-xl text-center md:text-2xl uppercase font-semibold text-white tracking-wide pb-24">
          ❤️ Trusted by Creators
        </h2>
        <div className="grid grid-cols-2 border-t border-[#D9D9D9]/15">
          <div className="border-r border-[#D9D9D9]/15 pt-11">
            <blockquote className="text-zinc-400 max-w-md text-sm px-6 pb-11">
              <Quote />
              <p className="mt-2">
                Druk Digital's UI components have transformed our development
                workflow. We're building high-quality interfaces in half the
                time with their meticulously crafted templates
              </p>
            </blockquote>
            <div className="border-y border-[#D9D9D9]/15 py-6 px-6 flex items-center gap-2">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-white/15">
                <img
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt=""
                />
              </div>
              <div className="text-white">
                <p className="text-sm">Sarah Chen</p>
                <p className="text-sm text-zinc-400">
                  Lead Developer at Nexus Innovation
                </p>
              </div>
            </div>
          </div>
          <div className="pt-11">
            <blockquote className="text-zinc-400 max-w-md text-sm px-6 pb-11">
              <Quote />
              <p className="mt-2">
                The attention to detail in Druk's component library is
                exceptional. Their dark theme elements have become the
                foundation of our product's signature look.
              </p>
            </blockquote>
            <div className="border-y border-[#D9D9D9]/15 py-6 px-6 flex items-center gap-2">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-white/15">
                <img
                  src="https://randomuser.me/api/portraits/men/54.jpg"
                  alt=""
                />
              </div>
              <div className="text-white">
                <p className="text-sm">Marcus Williams</p>
                <p className="text-sm text-zinc-400">
                  UX Director, Elevate Digital
                </p>
              </div>
            </div>
          </div>
          <div className="border-r border-[#D9D9D9]/15 pt-11">
            <blockquote className="text-zinc-400 max-w-md text-sm px-6 pb-11">
              <Quote />
              <p className="mt-2">
                As a solo developer, Druk Digital's templates have been
                game-changing for my client projects. Professional results
                without the enterprise price tag.
              </p>
            </blockquote>
            <div className="border-y border-[#D9D9D9]/15 py-6 px-6 flex items-center gap-2">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-white/15">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt=""
                />
              </div>
              <div className="text-white">
                <p className="text-sm">Jamie Rodriguez</p>
                <p className="text-sm text-zinc-400">
                  Independent Web Developer
                </p>
              </div>
            </div>
          </div>
          <div className="pt-11">
            <blockquote className="text-zinc-400 max-w-md text-sm px-6 pb-11">
              <Quote />
              <p className="mt-2">
                We evaluated several UI libraries before choosing Druk Digital.
                The flexibility and consistency across components made it an
                easy decision for our design system.
              </p>
            </blockquote>
            <div className="border-y border-[#D9D9D9]/15 py-6 px-6 flex items-center gap-2">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-white/15">
                <img
                  src="https://randomuser.me/api/portraits/women/41.jpg"
                  alt=""
                />
              </div>
              <div className="text-white">
                <p className="text-sm">Aisha Johnson</p>
                <p className="text-sm text-zinc-400">
                  Product Manager at TechForward
                </p>
              </div>
            </div>
          </div>
          <div className="border-r border-[#D9D9D9]/15 pt-11">
            <blockquote className="text-zinc-400 max-w-md text-sm px-6 pb-11">
              <Quote />
              <p className="mt-2">
                The documentation and component structure makes implementation
                incredibly straightforward. Druk's templates have significantly
                improved our team's productivity.
              </p>
            </blockquote>
            <div className="border-y border-[#D9D9D9]/15 py-6 px-6 flex items-center gap-2">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-white/15">
                <img
                  src="https://randomuser.me/api/portraits/men/29.jpg"
                  alt=""
                />
              </div>
              <div className="text-white">
                <p className="text-sm">David Park</p>
                <p className="text-sm text-zinc-400">
                  CTO at LaunchPad Studios
                </p>
              </div>
            </div>
          </div>
          <div className="pt-11">
            <blockquote className="text-zinc-400 max-w-md text-sm px-6 pb-11">
              <Quote />
              <p className="mt-2">
                Druk Digital's component library has significantly accelerated
                our product development cycle. Their modular approach and
                intuitive API design have made our team more efficient.
              </p>
            </blockquote>
            <div className="border-y border-[#D9D9D9]/15 py-6 px-6 flex items-center gap-2">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-white/15">
                <img
                  src="https://randomuser.me/api/portraits/women/53.jpg"
                  alt=""
                />
              </div>
              <div className="text-white">
                <p className="text-sm">Elena Kowalski</p>
                <p className="text-sm text-zinc-400">
                  Engineering Manager at Vertex Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
