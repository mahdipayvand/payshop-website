import { ProductsSection } from "components";
import { RiSearchLine } from "react-icons/ri";

const Home = ({ products }) => {
  return (
    <>
      <section className="h-[410px] bg-violet-50 border-b border-b-gray-200 -mt-10">
        <div className="container mx-auto h-full flex items-center justify-between">
          <div className="flex flex-col gap-y-11">
            <div className="flex flex-col gap-y-4">
              <h2 className="text-3xl font-black text-gray-800">لورم ایپسوم متن ساختگی</h2>
              <p className="text-gray-700 font-medium w-96 leading-6">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              <form className="relative">
                <input
                  type="search"
                  placeholder="دنبال چی میگردی؟"
                  className="bg-white h-14 rounded-full w-[590px] shadow pr-6 placeholder:text-gray-400 text-gray-500"
                />
                <button
                  type="button"
                  className="w-14 h-14 absolute top-0 left-0 grid place-items-center bg-white rounded-l-full text-gray-400"
                >
                  <RiSearchLine className="w-6 h-6" />
                </button>
              </form>
              <p className="text-xs text-gray-400 indent-2">برای مثال: لورم ایپسوم</p>
            </div>
          </div>
        </div>
      </section>
      <ProductsSection title="آخرین محصولات" products={products} />
    </>
  );
};

export const getServerSideProps = async () => {
  const productsReq = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product`);
  const productsRes = await productsReq.json();

  return {
    props: {
      products: productsRes?.successful ? productsRes?.data : [],
    },
  };
};

export default Home;
