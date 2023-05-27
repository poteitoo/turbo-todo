"use client";
import { useIsMounted } from "@/hooks/useIsMounted";
import { useForm } from "react-hook-form";

export type SignInFormType = {
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

  const onSubmit = (data: any) => console.log(data);

  if (!mounted) return null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 card card-compact glass w-96 rounded-md shadow-md p-8 pt-6 mb-4"
    >
      <h2 className="font-bold text-xl">Sign in to your account</h2>

      {/* username */}
      <div>
        <label htmlFor="username" className="block mb-1 font-semibold">
          Username
        </label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="poepoe"
          id="username"
          {...register("username", { required: true })}
        />
        {errors.username && (
          <p className="text-red-600 font-medium mt-1">
            ユーザー名を入力してください
          </p>
        )}
      </div>

      {/* password */}
      <div>
        <label htmlFor="password" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          type="password"
          className="input input-bordered w-full"
          placeholder="*****"
          id="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="text-red-600 font-medium mt-1">
            パスワードを入力してください
          </p>
        )}
      </div>

      {/* checkbox */}
      <div>
        <input
          type="checkbox"
          className="checkbox mr-3"
          id="remember"
          {...register("remember")}
        />
        <label htmlFor="remember" className="mb-1 font-medium">
          Remember me
        </label>
      </div>

      {/* submit */}
      <button className="btn" type="submit">
        Sign In
      </button>
      {errors.root && (
        <p className="text-red-600 font-medium">{errors.root.message}</p>
      )}
    </form>
  );
};
