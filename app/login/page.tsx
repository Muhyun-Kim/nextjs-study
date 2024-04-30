import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { UserIcon } from "@heroicons/react/24/solid";

export default function LogIn() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">ログイン！</h1>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput type="email" placeholder="Email" required errors={[]} />
        <FormInput
          type="password"
          placeholder="Password"
          required
          errors={[]}
        />
              <FormBtn loading={false} text="ログイン" icon={ <UserIcon /> } />
      </form>
      <SocialLogin />
    </div>
  );
}
