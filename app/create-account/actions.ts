"use server";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import { z } from "zod";

const checkConfirmPasswordSame = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "ユーザー名は文字にしてください",
        required_error: "ユーザー名を書いてください",
      })
      .min(3, "ユーザー名は3文字以上10文字以下にしてください")
      .max(10, "ユーザー名は3文字以上10文字以下にしてください"),
    email: z.string().email(),
    password: z.string().min(PASSWORD_MIN_LENGTH),
    confirm_password: z.string().min(PASSWORD_MIN_LENGTH),
  })
  .refine(checkConfirmPasswordSame, {
    message: "パウワードが間違っています。",
    path: ["confirm_password"],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  const result = formSchema.safeParse(data);
  if (!result.success) {
    return result.error.flatten();
  }
}
