import { Title, Input, Button } from "components";

const Login = () => (
  <div className="grid place-items-center">
    <div className="border p-10 rounded-2xl gap-y-8 flex flex-col w-2/6">
      <Title className="text-gray-600">ورود</Title>
      <form className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <Input type="email" placeholder="ایمیل" className="text-left placeholder:text-right" />
          <Input type="password" placeholder="رمز عبور" className="text-left placeholder:text-right" />
        </div>
        <Button className="h-14">ورود</Button>
      </form>
    </div>
  </div>
);

export default Login;
