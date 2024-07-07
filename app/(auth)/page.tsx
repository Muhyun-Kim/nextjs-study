import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">carrot</h1>
        <h2 className="text-2xl">welcome to carrot market!!</h2>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Link href="/create-account" className="primary-btn py-2.5">
          始める
        </Link>
        <div className="flex">
          <span>すでにアカウントをお持ちですか？</span>
          <Link href="/login" className="hover:underline underline-offset-1">
            ログイン
          </Link>
        </div>
      </div>
    </div>
  );
}
