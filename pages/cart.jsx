import Head from "next/head";
import { RiDeleteBinLine } from "react-icons/ri";
import { CartItem, Button, Price } from "components";

const inCartProducts = [
  {
    id: 1,
    image: "/products/1.jpg",
    title: "گوشی موبایل نوکیا مدل 105 - 2019 TA-1174 DS FA دو سیم کارت ظرفیت 4 مگابایت و رم 4 مگابایت",
    price: 10000,
  },
  {
    id: 2,
    image: "/products/2.jpg",
    title: "گوشی موبایل شیائومی مدل Poco C40 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت- گلوبال",
    price: 10000,
  },
  {
    id: 3,
    image: "/products/3.jpg",
    title: "گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
    price: 10000,
  },
];

const Cart = () => (
  <>
    <Head>
      <title>سبد خرید | فروشگاه اینترنتی پای‌شاپ</title>
    </Head>
    <div className="container mx-auto grid grid-cols-7 gap-x-8">
      <div className="col-span-5 border border-gray-200 rounded-xl bg-gray-200 h-min">
        <div className="flex justify-between items-center p-2">
          <h2 className="text-base indent-2 font-medium">سبد خرید</h2>
          <button className="hover:bg-gray-300 w-9 h-9 rounded-full grid place-items-center hover:text-gray-600">
            <RiDeleteBinLine className="w-5 h-5" />
          </button>
        </div>
        <ul className="divide-y divide-gray-200 last:[&>*]:rounded-b-xl first:[&>*]:rounded-t-xl">
          {inCartProducts.map((inCartProduct) => (
            <CartItem key={inCartProduct.id} {...inCartProduct} />
          ))}
        </ul>
      </div>
      <div className="col-span-2 border border-gray-200 rounded-xl bg-gray-200 h-min">
        <div className="bg-white rounded-xl flex flex-col p-4 gap-y-4">
          <ul className="flex flex-col gap-y-3">
            <li className="flex justify-between text-gray-500">
              <span>قیمت کالاها (3)</span>
              <Price>30000</Price>
            </li>
            <li className="flex justify-between text-gray-700 font-bold">
              <span>جمع سبد خرید</span>
              <Price>30000</Price>
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
  </>
);

export default Cart;
