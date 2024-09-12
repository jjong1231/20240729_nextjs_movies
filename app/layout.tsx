"use client";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../css/global.css";
// export const metadata = {
//   title: "tailwind css!",
//   description: "Generated by Next.js",
// };
import useStore from "../app/useStore";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { count, increment, decrement } = useStore();
  return (
    <html lang="en">
      <body className="">
        {/* <div className="flex flex-col min-h-screen py-10"> */}
        <div className="flex flex-col h-full py-10">
          <Header />
          <main className="flex items-center justify-center p-4 bg-slate-600">
            {/* <main className="md:container md:mx-auto p-10"> */}
            <div className="max-w-4xl w-full text-center break-all">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
