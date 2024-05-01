import FormBtn from "@/components/btn";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { UserIcon } from "@heroicons/react/24/solid";
import { login } from "./actions";

export default function LogIn() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">ログイン！</h1>
      </div>
      <form action={login} className="flex flex-col gap-3">
        <Input name="email" type="email" placeholder="Email" required />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <FormBtn text="ログイン" icon={<UserIcon />} />
      </form>
      <SocialLogin />
    </div>
  );
}
