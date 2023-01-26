import Image from "next/image";
import { Price, Button, Title } from "components";
import { RiHeartLine, RiShoppingBasket2Line, RiArrowLeftSLine } from "react-icons/ri";

const Product = ({ product }) => (
  <div className="container mx-auto">
    <div className="grid grid-cols-2 gap-x-20">
      <div className="flex flex-col gap-y-10">
        <h1 className="text-xl font-medium text-gray-700 leading-relaxed">{product?.title}</h1>
        <div className="flex gap-x-3">
          <Price className="ml-auto text-2xl">{product?.price}</Price>
          <Button>
            <RiShoppingBasket2Line className="w-6 h-6" />
            افزودن به سبد خرید
          </Button>
          <button className="h-14 w-14 border rounded-full border-gray-200 hover:border-gray-300 grid place-items-center hover:text-gray-600">
            <RiHeartLine className="w-6 h-6" />
          </button>
        </div>
        <div className="flex h-24 border rounded-xl items-cente r justify-between p-6 bg-gray-100">
          <div className="flex flex-col gap-y-1">
            <p className="text-xs">در دسته‌بندی</p>
            <h2 className="text-lg text-gray-600 font-medium">گوشی موبایل نوکیا</h2>
          </div>
          <button className="text-xs flex items-center gap-x-1 hover:text-violet-500">
            دیگر محصولات
            <RiArrowLeftSLine className="w-4 h-4" />
          </button>
        </div>
        <ul className="flex flex-col divide-y">
          <li className="py-2 text-[13px]">
            <span className="w-1/3 inline-block">فناوری صفحه‌نمایش</span>
            <strong>TFT</strong>
          </li>
          <li className="py-2 text-[13px]">
            <span className="w-1/3 inline-block">اندازه</span>
            <strong>1.7</strong>
          </li>
          <li className="py-2 text-[13px]">
            <span className="w-1/3 inline-block">اقلام همراه</span>
            <strong>اتری، دفترچه‌ راهنما، شارژر</strong>
          </li>
        </ul>
      </div>
      <div className="grid place-items-center h-[460px]">
        <Image src={process.env.NEXT_PUBLIC_API_URL + product?.image} width={300} height={300} alt={product?.title} />
      </div>
    </div>
    {product?.description && (
      <>
        <hr className="border-2 my-10" />
        <div className="flex flex-col gap-y-5">
          <Title className="text-gray-800">توضیحات</Title>
          <div
            className="leading-loose text-gray-700 prose-sm"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          />
        </div>
      </>
    )}
  </div>
);

export const getServerSideProps = async (context) => {
  const productReq = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${context?.query?.productID}`);
  const productRes = await productReq.json();

  return {
    props: {
      product: productRes?.data ? productRes?.data : {},
    },
    notFound: !productRes?.successful,
  };
};

export default Product;
