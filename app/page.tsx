import { Metadata } from "next";
import {
  SessionDataViewer,
  SignInButton,
  SignOutButton,
} from "@/components/auth";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";

export const metadata: Metadata = {
  title: "Web - Turborepo Example",
};

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <SignInButton />
      <SignOutButton />
      <SessionDataViewer />
      <p className="">{session?.user?.email}</p>
    </div>
  );
}
