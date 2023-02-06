import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { Price, DiscountPercentage } from "components";
import { RiAddLine, RiSubtractLine } from "react-icons/ri";
import { increaseItemQuantity, decreaseItemQuantity } from "store/slices/cart";

const CartItem = ({ quantity, product }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 flex items-stretch gap-x-2 bg-white flex-col sm:flex-row gap-y-6 sm:gap-y-0">
      <Image
        src={process.env.NEXT_PUBLIC_API_URL + product.image}
        width={100}
        height={100}
        alt={product.title}
        className="self-center sm:self-auto"
      />
      <div className="md:w-2/5 flex flex-col justify-between gap-y-2 sm:gap-y-0">
        <h3 className="text-base sm:line-clamp-2 font-medium">
          <Link href={`/product/${product.id}`}>{product.title}</Link>
        </h3>
        {product?.discount ? (
          <div className="flex">
            <div className="flex items-baseline gap-x-4">
              <div className="flex flex-col">
                <Price className="text-lg leading-tight">{product?.price - product?.discount}</Price>
                <Price hideCurrency className="text-[14px] line-through text-gray-400 font-light leading-tight">
                  {product?.price}
                </Price>
              </div>
              <DiscountPercentage price={product?.price} discount={product?.discount} />
            </div>
          </div>
        ) : (
          <Price className="text-lg">{product.price}</Price>
        )}
      </div>
      <div className="p-1 bg-gray-200 rounded-lg h-10 flex gap-x-1 mr-auto self-end">
        <button
          onClick={() => dispatch(increaseItemQuantity(product.id))}
          className="px-1.5 hover:text-gray-600 rounded-md"
        >
          <RiAddLine className="w-4 h-4" />
        </button>
        <span className="bg-white px-6 rounded-md grid place-items-center">{quantity}</span>
        <button
          onClick={() => dispatch(decreaseItemQuantity(product.id))}
          className="px-1.5 hover:text-gray-600 rounded-md"
        >
          <RiSubtractLine className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
