"use client";
import { SessionProvider, useSession } from "next-auth/react";

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
