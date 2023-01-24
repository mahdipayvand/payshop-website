import Image from "next/image";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";

const CartItem = ({ image, title }) => (
  <div className="p-4 flex items-stretch gap-x-2 bg-white">
    <Image src={image} width={100} height={100} alt={title} />
    <div className="w-2/5">
      <h3 className="text-base line-clamp-2 font-medium">{title}</h3>
    </div>
    <div className="p-1 bg-gray-200 rounded-lg h-10 flex gap-x-1 mr-auto self-end">
      <button className="px-1.5 hover:text-gray-600 rounded-md">
        <RiAddLine className="w-4 h-4" />
      </button>
      <span className="bg-white px-6 rounded-md grid place-items-center">1</span>
      <button className="px-1.5 hover:text-gray-600 rounded-md">
        <RiSubtractLine className="w-4 h-4" />
      </button>
    </div>
  </div>
);

export default CartItem;
