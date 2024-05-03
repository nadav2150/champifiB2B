import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body   className={`${inter.className} dark:bg-[#1E1F23] dark:text-white`}>
        <div className="flex">
        <SideBar />
        <div className="w-full ">
        {children}
        </div>
        </div>
      </body>
    </html>
  );
}
