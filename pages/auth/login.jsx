import Head from "next/head";
import Link from "next/link";
import { Title, Input, Button } from "components";

const Login = () => (
  <>
    <Head>
      <title>ورود | فروشگاه اینترنتی پای‌شاپ</title>
    </Head>
    <div className="grid place-items-center gap-y-8">
      <div className="border p-10 rounded-2xl gap-y-8 flex flex-col w-2/6">
        <Title className="text-gray-600">ورود</Title>
        <form className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-4">
            <Input type="email" placeholder="ایمیل" className="text-left placeholder:text-right" />
            <Input type="password" placeholder="رمز عبور" className="text-left placeholder:text-right" />
          </div>
          <Button>ورود</Button>
        </form>
      </div>
      <Link href="/auth/register" className="text-gray-500 hover:text-violet-500">
        ثبت نام
      </Link>
    </div>
  </>
);

export default Login;
