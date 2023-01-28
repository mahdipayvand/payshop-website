import Image from "next/image";
import { useDispatch } from "react-redux";
import { addItem } from "store/slices/cart";
import { Price, Button, Title } from "components";
import { RiShoppingBasket2Line } from "react-icons/ri";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-20">
        <div className="flex flex-col gap-y-10 order-2 lg:order-1">
          <h1 className="text-xl font-medium text-gray-700 leading-relaxed">{product?.title}</h1>
          <div className="flex gap-x-3 flex-col gap-y-8 md:gap-y-0 md:flex-row">
            <Price className="ml-auto text-2xl">{product?.price}</Price>
            <Button onClick={() => dispatch(addItem(product))}>
              <RiShoppingBasket2Line className="w-6 h-6" />
              افزودن به سبد خرید
            </Button>
          </div>
        </div>
        <div className="grid place-items-center h-[460px] lg:order-2">
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
};

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
