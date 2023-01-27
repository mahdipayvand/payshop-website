import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { login } from "store/slices/auth";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Title, Input, FormError, Button } from "components";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { token } = useSelector((store) => store.auth);
  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });

  const onSubmit = (data) => dispatch(login(data));

  useEffect(() => {
    if (!token) return;

    router.push("/");
  }, [token]);

  return (
    <>
      <Head>
        <title>ورود | فروشگاه اینترنتی پای‌شاپ</title>
      </Head>
      <div className="grid place-items-center gap-y-8">
        <div className="border p-10 rounded-2xl gap-y-8 flex flex-col w-2/6">
          <Title className="text-gray-600">ورود</Title>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
              <Input
                type="text"
                placeholder="ایمیل"
                className="text-left placeholder:text-right"
                {...register("email", {
                  required: "ایمیل رو وارد نکردی",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "ایمیلت رو درست وارد نکردی",
                  },
                })}
              />
              {formState?.errors?.email && <FormError>{formState?.errors?.email?.message}</FormError>}
              <Input
                type="password"
                placeholder="رمز عبور"
                className="text-left placeholder:text-right"
                {...register("password", { required: "رمز عبور رو وارد نکردی" })}
              />
              {formState?.errors?.password && <FormError>{formState?.errors?.password?.message}</FormError>}
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
};

export default Login;
