"use client"
import Aos from "aos";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  })
  return (
    <div className="grid md:grid-cols-2 text-center md:text-start justify-center pt-24">
      <div className="flex flex-col gap-16 text-white py-10">
        <p className="text-white font-bold text-5xl text-balance" data-aos="fade-down">
          Lorem ipsum dolor
          sit amet consectetur
          </p>
        <p className="text-balance text-sm" data-aos="fade-down">Lorem ipsum, dolor sit amet consectetur adipisicing elit. eligend explicabo facilis sunt voluptatem ad deserunt! Tenetur et doloribus obcaecati fuga.</p>
        <div className="grid md:grid-cols-3 gap-2 justify-around text-smtext-center">
          <Link className="px-2 py-2 bg-blue-500 text-center text-sm rounded-sm" href={'/about'} data-aos="fade-right">Learn more</Link>
          <Link className="px-2 py-2 bg-gray-200 text-black text-center text-sm rounded-sm" href={'/contact'} data-aos="fade-left">Contact</Link>
        </div>
      </div>
      <div className="relative max-w-50 max-h-50 bg-red-500 rounded-3xl" data-aos="fade-down">
        
      </div>
    </div>
    
  );
}
