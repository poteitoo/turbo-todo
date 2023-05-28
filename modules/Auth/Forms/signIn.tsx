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
    <div className="card glass card-compact mb-4 w-96 rounded-md p-8 pt-6 shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Sign in to your account</h2>
        {/* email */}
        <div>
          <label htmlFor="email" className="mb-1 block font-semibold">
            Email
          </label>
          <input
            type="email"
            className="input-bordered input w-full"
            placeholder="poepoe"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="mt-1 font-medium text-red-600">
              メールアドレスを入力してください
            </p>
          )}
        </div>

        {/* submit */}
        <button className="btn" type="submit">
          Sign In
        </button>
        {errors.root && (
          <p className="font-medium text-red-600">{errors.root.message}</p>
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
