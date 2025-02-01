"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Home as HomeIcon, Globe as GlobeIcon } from "lucide-react"; 

export default function Home() {
  // const [text, setText] = useState("");
  const fullText = "welcome to art space";
  // const [index, setIndex] = useState(0);
  const [language, setLanguage] = useState("EN");

  // useEffect(() => {
  //   if (index < fullText.length) {
  //     const timeout = setTimeout(() => {
  //       setText((prev) => prev + fullText[index]);
  //       setIndex(index + 1);
  //     }, 150);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [index]);

  return (
    // nav bar
    <div className="min-h-screen flex flex-col items-center bg-white-0 text-white">
      <nav className="w-full py-4 bg-white-800 shadow-lg">
          {/* <div className="flex items-center space-x-2">
            <Image
              src="/logo.png" // 確保有放入 public/logo.png
              alt="Project Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div> */}
        <div className="container mx-auto flex items-center justify-center space-x-4">
          <Link href="/" className="flex items-center space-x-1">
            <HomeIcon className="w-6 h-6 text-stone-900 hover:scale-110 transition-transform" />
          </Link>

          <span className="text-stone-900">|</span>

          <div className="flex space-x-6">
            {["arg", "MBTI", "polis", "about"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-stone-900 hover:text-stone hover:scale-105 transition-transform"
              >
                {item}
              </Link>
            ))}
          </div>
          <button
            onClick={() => setLanguage(language === "EN" ? "CN" : "EN")}
            className="flex items-center space-x-2 text-stone-900 hover:text-stone hover:scale-105 transition-transform"
          >
            <GlobeIcon className="w-5 h-5" />
            <span>{language}</span>
          </button>
        </div>
      </nav>
      
      {/* text and image */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl p-10 space-y-10 md:space-y-0">
        <div className="text-4xl font-bold md:w-1/2">
          <motion.span
            className="inline-block text-stone-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {fullText}
          </motion.span>
        </div>
        
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="https://picsum.photos/600/800?random=3"
            alt="Random Art"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </section>

      {/* footer */}
      <footer className="w-full text-center py-6 bg-stone-800 mt-auto">
        <p className="text-gray-400">© 2025 Art Space. All rights reserved.</p>
      </footer>
    </div>
  );
}
