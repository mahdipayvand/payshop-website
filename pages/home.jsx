import Link from "next/link";
import Image from "next/image";
import { ProductsSection } from "components";
import { RiShoppingBasket2Line, RiUser6Line, RiSearchLine } from "react-icons/ri";

const latestProducts = [
  {
    id: 1,
    image: "/products/1.jpg",
    title: "گوشی موبایل نوکیا مدل 105 - 2019 TA-1174 DS FA دو سیم کارت ظرفیت 4 مگابایت و رم 4 مگابایت",
  },
  {
    id: 2,
    image: "/products/2.jpg",
    title: "گوشی موبایل شیائومی مدل Poco C40 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت- گلوبال",
  },
  {
    id: 3,
    image: "/products/3.jpg",
    title: "گوشی موبایل شیائومی مدل Redmi Note 11 pro 4G دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
  },
  {
    id: 4,
    image: "/products/4.jpg",
    title: "گوشی موبایل شیائومی مدل Redmi A1 plus دو سیم کارت ظرفیت 32 گیگابایت و رم 2 گیگابایت - گلوبال ",
  },
  {
    id: 5,
    image: "/products/5.jpg",
    title: "گوشی موبایل هوآوی مدل nova Y70 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
  },
  {
    id: 6,
    image: "/products/6.jpg",
    title: "گوشی موبایل سامسونگ مدل GALAXY A53 5G دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
  },
  {
    id: 7,
    image: "/products/7.jpg",
    title: "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
  },
  {
    id: 8,
    image: "/products/8.jpg",
    title: "گوشی موبایل سامسونگ مدل Galaxy A53 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 8 گیگابایت",
  },
];

const Home = () => (
  <>
    <header className="h-[70px] border-b border-b-gray-200">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.svg" width={110} height={28} alt="پای‌شاپ" priority={1} />
        </Link>
        <div className="flex gap-x-2">
          <button className="border border-gray-200 h-12 px-6 rounded-full flex items-center gap-2 hover:border-gray-300 hover:text-gray-600">
            <RiShoppingBasket2Line className="w-5 h-5" />
            سبد خرید
          </button>
          <button className="border border-gray-200 w-12 h-12 rounded-full grid place-items-center hover:border-gray-300 hover:text-gray-600">
            <RiUser6Line className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
    <section className="h-[410px] bg-violet-50 border-b border-b-gray-200">
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
    <main className="py-10 flex flex-col gap-y-12">
      <ProductsSection title="آخرین محصولات" products={latestProducts} />
    </main>
    <footer className="h-16 grid place-items-center border-t border-t-gray-200">
      <p className="text-gray-600 text-xs">
        تمامی حقوق برای <strong>پای‌شاپ</strong> محفوظ است.
      </p>
    </footer>
  </>
);

export default Home;
