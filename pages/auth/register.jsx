import { Title, Input, Button } from "components";

const Register = () => (
  <div className="grid place-items-center">
    <div className="border p-10 rounded-2xl gap-y-8 flex flex-col w-2/6">
      <Title className="text-gray-600">ثبت نام</Title>
      <form className="flex flex-col gap-y-8">
        <div className="grid grid-cols-2 gap-4">
          <Input type="text" placeholder="نام" />
          <Input type="text" placeholder="نام خانوادگی" />
          <Input type="email" placeholder="ایمیل" className="col-span-full text-left placeholder:text-right" />
          <Input type="password" placeholder="رمز عبور" className="col-span-full text-left placeholder:text-right" />
        </div>
        <Button className="h-14">ثبت نام</Button>
      </form>
    </div>
  </div>
);

export default Register;
