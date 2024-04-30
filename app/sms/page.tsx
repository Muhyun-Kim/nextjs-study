import FormBtn from "@/components/form-btn";
import FormInput from "@/components/form-input";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function SMSLogin() {
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMSログイン</h1>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="number"
          placeholder="電話番号（携帯）"
          required
          errors={[]}
        />
        <FormInput
          type="number"
          placeholder="認証コード"
          required
          errors={[]}
        />
        <FormBtn loading={false} text="確認" icon={ <CheckCircleIcon /> } />
      </form>
    </div>
  );
}
