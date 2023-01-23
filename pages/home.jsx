import Link from "next/link";
import Image from "next/image";
import { RiShoppingBasket2Line, RiUser6Line } from "react-icons/ri";

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
  </>
);

export default Home;
