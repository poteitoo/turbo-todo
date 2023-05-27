"use client";

import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

export const SignInButton = () => {
  return (
    <button className="btn" onClick={() => signIn("github")}>
      サインイン
    </button>
  );
};

export const SignOutButton = () => {
  return (
    <button className="btn" onClick={() => signOut()}>
      サインアウト
    </button>
  );
};

export const SessionDataViewer = () => {
  const { data } = useSession();
  return <p className="">{data?.user?.name}</p>;
};

export const NextAuthProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return <SessionProvider>{children}</SessionProvider>;
};
