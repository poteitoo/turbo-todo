import "./globals.css";
import { NextAuthProvider } from "@/modules/Auth";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body className={twMerge(inter.className, "h-screen overflow-hidden")}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
