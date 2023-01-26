import Link from "next/link";

const NotFound = () => (
  <div className="container mx-auto flex flex-col items-center gap-y-8">
    <div className="flex flex-col gap-y-2 items-center">
      <h1 className="text-xl text-gray-600">صفحه پیدا نشد</h1>
      <p className="text-sm">این صفحه اشتباه است یا برای همیشه حذف شده</p>
    </div>
    <Link
      href="/"
      className="border border-gray-200 h-12 px-6 rounded-full flex items-center gap-2 hover:border-gray-300 hover:text-gray-600"
    >
      بازگشت به صفحه اصلی
    </Link>
  </div>
);

export default NotFound;
