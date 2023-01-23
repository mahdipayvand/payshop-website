import Link from "next/link";
import Image from "next/image";
import { RiShoppingBasket2Line, RiUser6Line, RiSearchLine } from "react-icons/ri";

const Home = () => (
  <>
    {/* Header */}
    <header className="h-[70px] border-b border-b-gray-200">
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.svg" width={110} height={28} alt="پای‌شاپ" priority={1} />
        </Link>
        <div className="flex gap-x-2">
          {/* Cart */}
          <button className="border border-gray-200 h-12 px-6 rounded-full flex items-center gap-2 hover:border-gray-300 hover:text-gray-600">
            <RiShoppingBasket2Line className="w-5 h-5" />
            سبد خرید
          </button>
          {/* Account */}
          <button className="border border-gray-200 w-12 h-12 rounded-full grid place-items-center hover:border-gray-300 hover:text-gray-600">
            <RiUser6Line className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
    {/* Hero */}
    <section className="h-[410px] bg-violet-50 border-b border-b-gray-200">
      <div className="container mx-auto h-full flex items-center justify-between">
        <div className="flex flex-col gap-y-11">
          {/* Text */}
          <div className="flex flex-col gap-y-4">
            <h1 className="text-3xl font-black text-gray-800">لورم ایپسوم متن ساختگی.</h1>
            <p className="text-gray-700 font-medium w-96 leading-6">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
          </div>
          {/* Search */}
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
  </>
);

export default Home;
