import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Title, Input } from "components";
import { logout } from "store/slices/auth";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RiUser6Line, RiLogoutCircleRLine } from "react-icons/ri";

const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const { token } = useSelector((store) => store.auth);

  useEffect(() => {
    if (token) return;

    router.push("/");
  }, [token]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const profileReq = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const profileRes = await profileReq.json();

      setUser(profileRes?.data);
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      <Head>
        <title>حساب کاربری | فروشگاه اینترنتی پای‌شاپ</title>
      </Head>
      <div className="container mx-auto grid grid-cols-4 gap-x-6">
        <div className="col-span-1 border-l border-l-gray-200 px-6 flex flex-col gap-y-6">
          <div className="flex flex-col items-center gap-y-2 h-14 justify-center">
            <h2 className="text-lg font-medium">
              {user?.firstName} {user?.lastName}
            </h2>
            <span className="bg-gray-200 rounded-full px-2 text-xs py-px cursor-help">{user?.email}</span>
          </div>
          <hr />
          <div className="flex flex-col gap-y-2">
            <Link href="#" className="rounded-full py-4 flex px-6 gap-x-2 text-[13px] bg-violet-500 text-white">
              <RiUser6Line className="w-6 h-6" />
              مدیریت حساب
            </Link>
            <button
              onClick={() => dispatch(logout())}
              className="rounded-full py-4 flex px-6 gap-x-2 text-[13px] hover:bg-gray-200 hover:text-gray-600"
            >
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
                disabled
                type="text"
                placeholder="نام"
                value={user?.firstName}
                className="col-span-2 h-12 disabled:cursor-not-allowed"
              />
              <Input
                disabled
                type="text"
                value={user?.lastName}
                placeholder="نام خانوادگی"
                className="col-span-2 h-12 disabled:cursor-not-allowed"
              />
              <Input
                disabled
                type="email"
                value={user?.email}
                placeholder="ایمیل"
                className="col-span-full text-left placeholder:text-right h-12 disabled:cursor-not-allowed"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
