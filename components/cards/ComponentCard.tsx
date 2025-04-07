import Image from "next/image";

interface Props {
  _id: string;
  name: string;
  number: string;
  image: string;
}

const ComponentCard = ({ _id, name, number, image }: Props) => {
  return (
    <li className="border-light-100/5 border-r border-b p-4">
      <Image
        src={image}
        alt={name}
        width={700}
        height={480}
        className="w-full rounded-md object-cover"
      />
      <div className="mt-6 space-y-2">
        <h3 className="text-light-300 font-semibold">{name}</h3>
        <p className="text-light-400 text-xs">{number} Components</p>
      </div>
    </li>
  );
};

export default ComponentCard;
