import React from "react";
import { Infinity, Users } from "lucide-react";

const PricingSection = () => {
  return (
    <div className="flex items-center justify-center px-6 pb-32">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-xl text-center md:text-2xl uppercase font-semibold text-white tracking-wide pt-32 pb-24">
          Choose the plan that's right for you
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Plan */}
          <div className="bg-[#d9d9d90d] rounded-md p-10 border border-zinc-800 hover:border-zinc-700 transition-all">
            <div className="mb-6">
              <span className="text-zinc-400 font-semibold uppercase tracking-wider text-sm">
                Basic
              </span>
              <p className="text-sm text-white mt-2">
                For individuals working on their next big idea.
              </p>
            </div>

            <div className="flex items-start mt-8 mb-8">
              <span className="text-4xl font-bold text-white">$16</span>
              <div className="ml-4">
                <div className="text-sm text-zinc-400">one time payment</div>
                <div className="text-sm text-zinc-400">plus local taxes</div>
              </div>
            </div>

            <div className="mb-10 flex">
              {/* <div className="mr-4 flex-shrink-0">
                <Infinity className="h-8 w-8 text-zinc-400" />
              </div> */}
              <div>
                <h3 className="text-white font-semibold uppercase text-sm">
                  Lifetime access
                </h3>
                <p className="text-zinc-400 mt-2 text-sm">
                  Get instant access to everything we have today, plus any new
                  components and templates we add in the future.
                </p>
              </div>
            </div>
            <button className="border border-[#070707] bg-gradient-to-b from-[#D7D794] to-[#F6FF7F] uppercase font-semibold py-2 px-6 text-sm rounded-md hover:bg-zinc-800 transition-colors w-full md:w-auto">
              Get Full Access
            </button>
          </div>

          {/* Teams Plan */}
          <div className="rounded-md p-10 border border-zinc-800 hover:border-zinc-700 transition-all">
            <div className="mb-6">
              <span className="text-zinc-400 font-semibold uppercase tracking-wider text-sm">
                Basic Plus
              </span>
              <p className="text-white mt-2 text-sm">
                For product teams and agencies.
              </p>
            </div>

            <div className="flex items-start mt-8 mb-8">
              <span className="text-4xl font-bold text-white">$499</span>
              <div className="ml-4">
                <div className="text-sm text-zinc-400">one time payment</div>
                <div className="text-sm text-zinc-400">plus local taxes</div>
              </div>
            </div>

            <div className="mb-10 flex">
              {/* <div className="mr-4 flex-shrink-0">
                <Users className="h-8 w-8 text-zinc-400" />
              </div> */}
              <div>
                <h3 className="text-white font-medium">
                  Get access for your entire team —
                </h3>
                <p className="text-zinc-400 text-sm mt-1 max-w-sm">
                  Team licenses include access for up to 25 people to
                  accommodate even the largest teams at your company.
                </p>
              </div>
            </div>
            <button className="bg-[#1E1E1E] border border-[#414146] text-white font-medium py-2 px-6 rounded-md hover:bg-gray-200 transition-colors w-full md:w-auto">
              Get Tailwind Plus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
