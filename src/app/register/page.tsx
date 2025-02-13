import AuthForm from "@/components/Auth/AuthForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="flex-1 h-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[400px] border border-primary p-4 rounded-xl ">
        <h2 className="text-center font-bold text-3xl">Добро пожаловать! </h2>
        <AuthForm type="signup" />
        <Link
          className="text-sm text-[#aaa] mt-3 inline-block hover:text-black transition"
          href={"/login"}
        >
          Уже есть аккаунт?
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
