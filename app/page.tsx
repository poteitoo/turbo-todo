import { Metadata } from "next";
import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

const SignInForm = dynamic(() => import("@/components/SignInForm"));

export default function Home<NextPage>() {
  return (
    <div className="flex justify-center items-center h-full bg-gradient-to-t from-blue-100 to-cyan-100">
      <Suspense>
        <SignInForm />
      </Suspense>
    </div>
  );
}
