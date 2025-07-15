// app/components/Card.tsx

import Image from "next/image";

type CardProps = {
  title: string;
  image: String;
  rate: number | string;
  amout: number | string;
};

const Card = ({ title, image, rate, amout }: CardProps) => {
  return (
    <div className="text-xl border border-gray-400 rounded-md p-5">
      <Image src={String(image)} alt={title} width={200} height={200} />
      <h1 className="text-base">{title}</h1>
      <p>{rate}</p>
      <p>{amout}</p>
    </div>
  );
};

export default Card;
