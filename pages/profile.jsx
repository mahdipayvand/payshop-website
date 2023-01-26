import Head from "next/head";
import Link from "next/link";
import { Title, Input } from "components";
import { RiUser6Line, RiHeartLine, RiLogoutCircleRLine } from "react-icons/ri";

const Profile = () => (
  <>
    <Head>
      <title>حساب کاربری | فروشگاه اینترنتی پای‌شاپ</title>
    </Head>
    <div className="container mx-auto grid grid-cols-4 gap-x-6">
      <div className="col-span-1 border-l border-l-gray-200 px-6 flex flex-col gap-y-6">
        <div className="flex flex-col items-center gap-y-2 h-14 justify-center">
          <h2 className="text-lg font-medium">مهدی پایوند</h2>
          <span className="bg-gray-200 rounded-full px-2 text-xs py-px cursor-help">paivand13811831@gmail.com</span>
        </div>
        <hr />
        <div className="flex flex-col gap-y-2">
          <Link href="#" className="rounded-full py-4 flex px-6 gap-x-2 text-[13px] bg-violet-500 text-white">
            <RiUser6Line className="w-6 h-6" />
            مدیریت حساب
          </Link>
          <Link
            href="#"
            className="rounded-full py-4 flex px-6 gap-x-2 text-[13px] hover:bg-gray-200 hover:text-gray-600"
          >
            <RiHeartLine className="w-6 h-6" />
            محصولات موردعلاقه
          </Link>
          <button className="rounded-full py-4 flex px-6 gap-x-2 text-[13px] hover:bg-gray-200 hover:text-gray-600">
            <RiLogoutCircleRLine className="w-6 h-6" />
            خروج از حساب کاربری
          </button>
        </div>
      </div>
      <div className="col-span-3 h-[200px] flex flex-col gap-y-6">
        <div className="h-14">
          <Title>مدیریت حساب</Title>
        </div>
        <hr />
        <div className="px-4">
          <form className="grid grid-cols-4 gap-4">
            <Input
              type="text"
              placeholder="نام"
              className="col-span-2 h-12 disabled:cursor-not-allowed"
              disabled
              value="مهدی"
            />
            <Input
              type="text"
              placeholder="نام خانوادگی"
              className="col-span-2 h-12 disabled:cursor-not-allowed"
              disabled
              value="پایوند"
            />
            <Input
              type="email"
              placeholder="ایمیل"
              className="col-span-full text-left placeholder:text-right h-12 disabled:cursor-not-allowed"
              disabled
              value="paivand13811831@gmail.com"
            />
          </form>
        </div>
      </div>
    </div>
  </>
);

export default Profile;
