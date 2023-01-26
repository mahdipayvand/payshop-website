import { ProductsSection } from "components";
import { RiSearchLine } from "react-icons/ri";

const latestProducts = [
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
  {
    id: 4,
    image: "/products/4.jpg",
    title: "گوشی موبایل شیائومی مدل Redmi A1 plus دو سیم کارت ظرفیت 32 گیگابایت و رم 2 گیگابایت - گلوبال ",
    price: 10000,
  },
  {
    id: 5,
    image: "/products/5.jpg",
    title: "گوشی موبایل هوآوی مدل nova Y70 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
    price: 10000,
  },
  {
    id: 6,
    image: "/products/6.jpg",
    title: "گوشی موبایل سامسونگ مدل GALAXY A53 5G دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
    price: 10000,
  },
  {
    id: 7,
    image: "/products/7.jpg",
    title: "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
    price: 10000,
  },
  {
    id: 8,
    image: "/products/8.jpg",
    title: "گوشی موبایل سامسونگ مدل Galaxy A53 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
    price: 10000,
  },
];

const Home = () => (
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
    <ProductsSection title="آخرین محصولات" products={latestProducts} />
  </>
);

export default Home;
