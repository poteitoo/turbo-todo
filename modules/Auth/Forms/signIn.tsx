"use client";
import { useIsMounted } from "@/hooks/useIsMounted";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

export type SignInFormType = {
  email: string;
  username: string;
  password: string;
  remember: boolean;
};

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormType>({
    defaultValues: {
      remember: false,
    },
  });
  const mounted = useIsMounted();

  const onSubmit = (data: SignInFormType) => {
    signIn("email", { email: data.email, redirect: true });
    console.log(data);
  };

  if (!mounted) return null;

  return (
    <div className="card card-compact glass w-96 rounded-md shadow-md p-8 pt-6 mb-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <h2 className="font-bold text-xl">Sign in to your account</h2>
        {/* email */}
        <div>
          <label htmlFor="email" className="block mb-1 font-semibold">
            Email
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="poepoe"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-600 font-medium mt-1">
              メールアドレスを入力してください
            </p>
          )}
        </div>

        {/* submit */}
        <button className="btn" type="submit">
          Sign In
        </button>
        {errors.root && (
          <p className="text-red-600 font-medium">{errors.root.message}</p>
        )}
      </form>

      {/* SSO */}
      <div className="divider">OR</div>
      <button className="btn" onClick={() => signIn("github")}>
        Github
      </button>
    </div>
  );
};
