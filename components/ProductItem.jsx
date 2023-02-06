import Link from "next/link";
import Image from "next/image";
import { DiscountPercentage, Price } from "components";

const ProductItem = ({ id, image, title, price, discount }) => (
  <Link href={`/product/${id}`} className="flex flex-col items-center gap-y-4">
    <Image src={process.env.NEXT_PUBLIC_API_URL + image} width={150} height={150} alt={title} />
    <h4 className="font-medium text-gray-700 line-clamp-2 text-ellipsis self-start">{title}</h4>
    {discount ? (
      <div className="flex w-full items-start">
        <DiscountPercentage price={price} discount={discount} />
        <div className="flex flex-col self-end items-end flex-1">
          <Price className="text-base gap-x-1">{price - discount}</Price>
          <Price hideCurrency className="text-[14px] gap-x-1 line-through text-gray-400 font-light">
            {price}
          </Price>
        </div>
      </div>
    ) : (
      <Price className="text-base self-end gap-x-1">{price}</Price>
    )}
  </Link>
);

export default ProductItem;
