import Image from "next/image";
import Link from "next/link";

interface Props {
  _id: string;
  name: string;
  number: string;
  image: string;
  href?: string;
}

const ComponentCard = ({ _id, name, number, image, href }: Props) => {
  return (
    <li className="border-light-100/5 group cursor-pointer overflow-hidden border-r border-b p-4">
      <Link href={`${href}`} className="">
        <Image
          src={image}
          alt={name}
          width={700}
          height={480}
          className="w-full rounded-md object-cover group-hover:opacity-75"
        />
        <div className="mt-6 space-y-2">
          <h3 className="text-light-300 font-semibold">{name}</h3>
          <p className="text-light-400 text-xs">{number} Components</p>
        </div>
      </Link>
    </li>
  );
};

export default ComponentCard;
