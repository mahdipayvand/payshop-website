import { ProductsSection } from "components";

const Home = ({ products }) => {
  return (
    <>
      <section className="h-[410px] bg-violet-50 border-b border-b-gray-200 -mt-10 bg-[url(/hero.jpg)] bg-cover bg-blend-darken hidden lg:block">
        <div className="container mx-auto h-full flex items-center justify-between">
          <div className="flex flex-col gap-y-11">
            <div className="flex flex-col gap-y-8">
              <h2 className="text-3xl font-black text-gray-800">لورم ایپسوم متن ساختگی</h2>
              <p className="text-gray-700 font-medium w-2/4 leading-loose line-clamp-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و
                متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
                کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
                شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
              </p>
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
