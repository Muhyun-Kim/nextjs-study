"use server";
import { PASSWORD_MIN_LENGTH } from "@/lib/constants";
import db from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcrypt";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const checkConfirmPasswordSame = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const checkUniqueUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  });
  return !Boolean(user);
};

const checkUniqueEmail = async (userEmail: string) => {
  const user = await db.user.findUnique({
    where: {
      email: userEmail,
    },
    select: {
      id: true,
    },
  });
  return Boolean(user) === false;
};

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "ユーザー名は文字にしてください",
        required_error: "ユーザー名を書いてください",
      })
      .min(3, "ユーザー名は3文字以上10文字以下にしてください")
      .max(10, "ユーザー名は3文字以上10文字以下にしてください")
      .refine(checkUniqueUsername, "登録済みのユーザー名です"),
    email: z
      .string()
      .email()
      .refine(checkUniqueEmail, "登録済みのメールアドレスです"),
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
  const result = await formSchema.safeParseAsync(data);
  if (!result.success) {
    return result.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(result.data.password, 12);
    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });
    const cookie = await getIronSession(cookies(), {
      cookieName: "delicious-carrot",
      password: process.env.COOKIE_PASSWORD!,
    });
    //@ts-ignore
    cookie.id = user.id;
    await cookie.save();

    redirect("/profile");
  }
}
