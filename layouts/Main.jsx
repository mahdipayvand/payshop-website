import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RiShoppingBasket2Line, RiUser6Line } from "react-icons/ri";

const Main = ({ children }) => {
  const router = useRouter();
  const {
    cart: { totalItems },
    auth: { token },
  } = useSelector((store) => store);

  return (
    <>
      <header className="h-[70px] border-b border-b-gray-200 px-5 lg:px-0">
        <div className="container mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-x-8">
            <Link href="/">
              <Image src="/logo.svg" width={110} height={28} alt="پای‌شاپ" priority={1} />
            </Link>
            <Link
              href="/"
              className={`border-r border-r-gray-300 pr-8 hover:text-violet-500 hidden sm:block after:absolute after:h-1 after:bg-violet-500 relative after:w-[calc(theme(width.full)_-_theme(padding.8))] after:-bottom-6 after:right-8 after:rounded-t-lg ${
                router.pathname == "/home" ? "text-violet-500" : "after:hidden"
              }`}
            >
              صفحه اصلی
            </Link>
          </div>
          <div className="flex gap-x-2">
            <Link
              href="/cart"
              className="border border-gray-200 h-12 px-6 rounded-full flex items-center gap-2 hover:border-gray-300 hover:text-gray-600 relative"
            >
              <RiShoppingBasket2Line className="w-5 h-5" />
              سبد خرید
              {totalItems > 0 && (
                <span className="absolute bg-violet-500 text-white w-[19px] h-[19px] rounded-lg border-[3px] border-white top-3.5 right-2.5 grid place-items-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link
              href={token ? "/profile" : "/auth/login"}
              className="border border-gray-200 w-12 h-12 rounded-full grid place-items-center hover:border-gray-300 hover:text-gray-600"
            >
              <RiUser6Line className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>
      <main className="py-10 flex flex-col gap-y-12 px-5 lg:px-0">{children}</main>
      <footer className="h-14 grid place-items-center border-t border-t-gray-200">
        <p className="text-gray-600 text-xs">
          تمامی حقوق برای <strong>پای‌شاپ</strong> محفوظ است.
        </p>
      </footer>
    </>
  );
};

export default Main;
