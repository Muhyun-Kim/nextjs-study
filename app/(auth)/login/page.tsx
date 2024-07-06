"use client";

import FormBtn from "@/components/btn";
import Input from "@/components/input";
import SocialLogin from "@/components/social-login";
import { UserIcon } from "@heroicons/react/24/solid";
import { login } from "./actions";
import { useFormState } from "react-dom";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";

export default function LogIn() {
  const [state, dispatch] = useFormState(login, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">ログイン！</h1>
      </div>
      <form action={dispatch} className="flex flex-col gap-3">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          errors={state?.fieldErrors.password}
        />
        <FormBtn text="ログイン" icon={<UserIcon />} />
      </form>
      <SocialLogin />
    </div>
  );
}
