import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import {
  ChatBubbleBottomCenterIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">アカウント作成</h1>
        <h2 className="text-xl">会員登録をしてください！</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type={"text"}
          placeholder={"ユーザー名"}
          required={true}
          errors={[]}
        />
        <FormInput
          type={"email"}
          placeholder={"メールアドレス"}
          required={true}
          errors={[]}
        />
        <FormInput
          type={"password"}
          placeholder={"パスワード"}
          required={true}
          errors={[]}
        />
        <FormInput
          type={"password"}
          placeholder={"パスワード確認"}
          required={true}
          errors={[]}
        />
        <FormBtn
          loading={false}
          text={"アカウント作成"}
          icon={<UserCircleIcon />}
        />
      </form>
      <SocialLogin />
    </div>
  );
}
