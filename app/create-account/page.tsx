"use client";

import FormBtn from "@/components/btn";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import {
  ChatBubbleBottomCenterIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function CreateAccount() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">アカウント作成</h1>
        <h2 className="text-xl">会員登録をしてください！</h2>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="username"
          type="text"
          placeholder="ユーザー名"
          required
          errors={state?.fieldErrors.username}
          minLength={3}
          maxLength={10}
        />
        <Input
          name="email"
          type="email"
          placeholder="メールアドレス"
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="パスワード"
          required
          errors={state?.fieldErrors.password}
          minLength={4}
        />
        <Input
          name="confirm_password"
          type="password"
          placeholder="パスワード確認"
          required
          errors={state?.fieldErrors.confirm_password}
        />
        <FormBtn text={"アカウント作成"} icon={<UserCircleIcon />} />
      </form>
      <SocialLogin />
    </div>
  );
}
