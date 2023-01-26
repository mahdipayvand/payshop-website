import Link from "next/link";
import Image from "next/image";
import { RiShoppingBasket2Line, RiUser6Line } from "react-icons/ri";

const Main = ({ children }) => (
  <>
    <header className="h-[70px] border-b border-b-gray-200">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.svg" width={110} height={28} alt="پای‌شاپ" priority={1} />
        </Link>
        <div className="flex gap-x-2">
          <Link
            href="/cart"
            className="border border-gray-200 h-12 px-6 rounded-full flex items-center gap-2 hover:border-gray-300 hover:text-gray-600"
          >
            <RiShoppingBasket2Line className="w-5 h-5" />
            سبد خرید
          </Link>
          <Link
            href="/profile"
            className="border border-gray-200 w-12 h-12 rounded-full grid place-items-center hover:border-gray-300 hover:text-gray-600"
          >
            <RiUser6Line className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
    <main className="py-10 flex flex-col gap-y-12">{children}</main>
    <footer className="h-14 grid place-items-center border-t border-t-gray-200">
      <p className="text-gray-600 text-xs">
        تمامی حقوق برای <strong>پای‌شاپ</strong> محفوظ است.
      </p>
    </footer>
  </>
);

export default Main;
