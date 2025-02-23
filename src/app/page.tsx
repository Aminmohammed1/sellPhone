"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui";

export default function Home() {
  function Button({ children, className, onClick }: { children: React.ReactNode, className: string, onClick?: () => void; }) {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }

  const router = useRouter();
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col items-center p-6 text-white">
      <div className="w-full flex justify-between items-center">
        {/* <header className="w-full flex justify-between items-center p-4"> */}
        <div className="w-full flex">
          <h1 className="text-[25px] font-bold min-w-fit">cashmobile.in</h1>
        </div>
        <div className="w-full flex justify-end">
          <nav>
            <ul className="flex space-x-4 text-lg">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline" onClick={() => router.push("./pages")}>Sell Mobile</a></li>
            </ul>
          </nav>
        </div>
        {/* </header> */}
      </div>
      <div className="w-fit flex flex-col items-center bg-gradient-to-br from-purple-500 to-gray-900 bg-opacity-30 p-9 rounded-xl shadow-lg mt-20 py-12">
        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">Instantly Sell Your Used Phone</h2>
          <p className="mb-6 text-lg">Best Price Guaranteed | Secure & Fast</p>
          <Button onClick={() => router.push("/pages")} className="bg-yellow-500 text-black px-6 py-3 rounded-lg" >Get a Quote</Button>
        </section>
        <section className="mt-12 gap-6">
          <div className="bg-gray-300 text-black p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold flex justify-center">Sell Mobile</h3>
            <p>Trade in your old phone for instant cash.</p>
            <p className="flex justify-center">Free pickup service</p>
            <div className="flex justify-center mt-2 gap-2 items-center">
            <Image src="/phone.jpeg" className="h-8" alt="sell mobile" />
              <p className="text-black font-semibold">
                <a href="tel:+917670836076" className="text-black hover:underline hover:text-blue-500">
                  +91 7670836076
                </a>
              </p>
            </div>
          </div>
          {/* <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Repair Mobile</h3>
          <p>Fix your damaged phone with ease.</p>
        </div> */}
        </section>
      </div>
    </div>
  );
}
