import Image from "next/image";

const ProductItem = ({ image, title }) => (
  <div className="flex flex-col items-center gap-y-4">
    <Image src={image} width={150} height={150} alt={title} />
    <h4 className="font-medium text-gray-700 line-clamp-2 text-ellipsis">{title}</h4>
  </div>
);

export default ProductItem;
