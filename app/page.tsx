import { SignInForm } from "@/modules/Auth";
import { Metadata } from "next";
// import { getCsrfToken } from "next-auth/react";

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

export default async function Page<NextPage>() {
  // const csrfToken = await getCsrfToken(context);

  return (
    <div className="full flex justify-center items-center bg-gradient-blue">
      <SignInForm />
    </div>
  );
}
