import Head from "next/head";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { register } from "store/slices/auth";
import { Title, Input, FormError, Button } from "components";

const Register = () => {
  const dispatch = useDispatch();
  const { register: reg, handleSubmit, formState, reset } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    dispatch(register(data));
    reset();
  };

  return (
    <>
      <Head>
        <title>ثبت نام | فروشگاه اینترنتی پای‌شاپ</title>
      </Head>
      <div className="grid place-items-center">
        <div className="border p-10 rounded-2xl gap-y-8 flex flex-col w-full md:w-2/6">
          <Title className="text-gray-600">ثبت نام</Title>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-8">
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="text" 
                placeholder="نام"
                className="col-span-full sm:col-span-1"
                {...reg("firstName", { required: "نام رو وارد نکردی" })}
              />
              <Input
                type="text"
                placeholder="نام خانوادگی"
                className="col-span-full sm:col-span-1"
                {...reg("lastName", { required: "نام خانوادگی رو وارد نکردی" })}
              />
              {formState?.errors?.firstName && <FormError>{formState?.errors?.firstName?.message}</FormError>}
              {formState?.errors?.lastName && <FormError>{formState?.errors?.lastName?.message}</FormError>}
              <Input
                type="text"
                placeholder="ایمیل"
                className="col-span-full text-left placeholder:text-right"
                {...reg("email", {
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
                className="col-span-full text-left placeholder:text-right"
                {...reg("password", { required: "رمز عبور رو وارد نکردی" })}
              />
              {formState?.errors?.password && <FormError>{formState?.errors?.password?.message}</FormError>}
            </div>
            <Button>ثبت نام</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
