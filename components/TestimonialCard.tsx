import { Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string; // URL or path to the image
}

export const TestimonialCard = ({
  testimonial,
  hasBorderRight,
}: {
  testimonial: Testimonial;
  hasBorderRight: boolean;
}) => {
  const { quote, name, role, image } = testimonial;

  return (
    <div
      className={`pt-11 ${hasBorderRight ? "border-r border-[#D9D9D9]/15" : ""}`}
    >
      <blockquote className="max-w-md px-6 pb-11 text-sm text-zinc-400">
        <Quote />
        <p className="mt-2">{quote}</p>
      </blockquote>
      <div className="flex items-center gap-2 border-b border-[#D9D9D9]/15 px-6 py-6">
        <div className="h-11 w-11 overflow-hidden rounded-full border border-white/15">
          <Image
            src={image}
            alt={`Photo of ${name}`}
            width={44}
            height={44}
            className="h-full w-full object-cover"
            priority={false}
          />
        </div>
        <div className="text-white">
          <p className="text-sm">{name}</p>
          <p className="text-sm text-zinc-400">{role}</p>
        </div>
      </div>
    </div>
  );
};
