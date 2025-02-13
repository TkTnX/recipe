import AuthForm from "@/components/Auth/AuthForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="flex-1 h-full flex flex-col items-center justify-center ">
      <div className="w-full max-w-[400px] border border-primary p-4 rounded-xl ">
        <h2 className="text-center font-bold text-3xl">С возвращением! </h2>
        <AuthForm type="login" />
        <Link
          className="text-sm text-[#aaa] mt-3 inline-block hover:text-black transition"
          href={"/register"}
        >
          Ещё нет аккаунта?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
