import { SignInForm } from "@/modules/Auth";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

export default function Home<NextPage>() {
  return (
    <div className="flex justify-center items-center h-full bg-gradient-to-t from-blue-100 to-cyan-100">
      <Suspense>
        <SignInForm />
      </Suspense>
    </div>
  );
}
