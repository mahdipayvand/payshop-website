import Head from "next/head";
import Link from "next/link";
import { removeItems } from "store/slices/cart";
import { RiDeleteBinLine } from "react-icons/ri";
import { CartItem, Button, Price } from "components";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalItems, totalPrice } = useSelector((store) => store.cart);

  return (
    <>
      <Head>
        <title>سبد خرید | فروشگاه اینترنتی پای‌شاپ</title>
      </Head>
      {items.length > 0 ? (
        <div className="container mx-auto grid grid-cols-7 gap-8">
          <div className="col-span-full lg:col-span-5 border border-gray-200 rounded-xl bg-gray-200 h-min">
            <div className="flex justify-between items-center p-2">
              <h2 className="text-base indent-2 font-medium">سبد خرید</h2>
              <button
                onClick={() => dispatch(removeItems())}
                className="hover:bg-gray-300 w-9 h-9 rounded-full grid place-items-center hover:text-gray-600"
              >
                <RiDeleteBinLine className="w-5 h-5" />
              </button>
            </div>
            <ul className="divide-y divide-gray-200 last:[&>*]:rounded-b-xl first:[&>*]:rounded-t-xl">
              {items.map((item) => (
                <CartItem key={item} {...item} />
              ))}
            </ul>
          </div>
          <div className="col-span-full lg:col-span-2 border border-gray-200 rounded-xl bg-gray-200 h-min">
            <div className="bg-white rounded-xl flex flex-col p-4 gap-y-4">
              <ul className="flex flex-col gap-y-3">
                <li className="flex justify-between text-gray-500">
                  <span>قیمت کالاها ({totalItems})</span>
                  <Price>{totalPrice}</Price>
                </li>
                <li className="flex justify-between text-gray-700 font-bold">
                  <span>جمع سبد خرید</span>
                  <Price>{totalPrice}</Price>
                </li>
              </ul>
              <hr className="border-gray-200 border-dashed" />
              <Button className="h-12">ادامه</Button>
            </div>
            <div className="flex py-4 justify-between px-4 text-[12px]">
              <span className="font-medium">سود شما از خرید</span>
              <Price>0</Price>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto flex flex-col items-center gap-y-8">
          <div className="flex flex-col gap-y-2 items-center">
            <h1 className="text-xl text-gray-600">سبد خریدتون خالیه</h1>
            <p className="text-sm">میتونی هر محصولی که میخوای رو به سبد خریدت اضافه کنی</p>
          </div>
          <Link
            href="/"
            className="border border-gray-200 h-12 px-6 rounded-full flex items-center gap-2 hover:border-gray-300 hover:text-gray-600"
          >
            مشاهده محصولات
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
