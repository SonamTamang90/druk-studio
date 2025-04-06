import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { Plus, Minus } from "lucide-react";

const CenteredFaq = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  return (
    <Disclosure as="div" className="pt-6">
      <dt>
        <DisclosureButton className="group text-light-400 flex w-full items-start justify-between pb-6 text-left">
          <span className="text-light-300 text-base/7 font-semibold">
            {question}
          </span>
          <span className="ml-6 flex h-7 items-center">
            <Plus
              aria-hidden="true"
              className="size-6 group-data-[open]:hidden"
            />
            <Minus
              aria-hidden="true"
              className="size-6 group-[&:not([data-open])]:hidden"
            />
          </span>
        </DisclosureButton>
      </dt>
      <DisclosurePanel as="dd" className="mt-2 pr-12 pb-6">
        <p className="text-light-400 text-base/7">{answer}</p>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default CenteredFaq;
