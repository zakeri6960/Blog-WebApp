"use client"
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";

export default function PostCard({imageSrc, post}: any){
  useEffect(() => {
    Aos.init({ duration: 1200 });
  })
  return (
    <div className="rounded text-white pb-20 relative m-0 bg-gradient-to-r from-blue-900 to-blue-500 inline-block" data-aos="zoom-in">
        <Image className="w-full rounded-t-sm relative after:absolute after:content-['Nov_04_2023'] after:rotate-90 after:top-20" priority={true} src={imageSrc} height={200} width={300} alt="Image" />
        <h3 className="font-bold text-2xl pl-3 py-2">{ post.title }</h3>
        <p className="text-sm pl-3 py-2 text-white/50">{ post.desc }</p>
        <Link className="absolute bottom-3 left-3 bg-blue-500 text-xs px-2 rounded-sm py-2 text-gray-300" href={`/blog/${post.slug}`}>Read More</Link> 
    </div>      
  )
}
