import Link from "next/link";
import Image from "next/image";
import { Price } from "components";

const SpecialOffersProductItem = ({ id, image, title, price, discount }) => (
  <Link href={`/product/${id}`} className="flex flex-col items-center gap-y-4 bg-white p-4">
    <Image src={process.env.NEXT_PUBLIC_API_URL + image} width={120} height={120} alt={title} />
    <h4 className="font-medium text-gray-700 line-clamp-2 text-ellipsis self-start">{title}</h4>
    <Price className="text-base self-end gap-x-1">{price - discount}</Price>
  </Link>
);

export default SpecialOffersProductItem;
