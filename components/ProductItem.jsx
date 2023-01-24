import Link from "next/link";
import Image from "next/image";

const ProductItem = ({ id, image, title }) => (
  <Link href={`/product/${id}`} className="flex flex-col items-center gap-y-4">
    <Image src={image} width={150} height={150} alt={title} />
    <h4 className="font-medium text-gray-700 line-clamp-2 text-ellipsis">{title}</h4>
  </Link>
);

export default ProductItem;
