"use client"
import Aos from "aos"
import { useEffect } from "react"



export default function AboutPage() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
    })
    return (
      <div className="pt-10 text-center md:text-start grid md:grid-cols-2 justify-center">
      <div className="flex flex-col gap-10 text-white py-10">
        <p className="text-blue-500" data-aos="fade-down">About Agency</p>
        <p className="text-white font-bold text-5xl text-balance" data-aos="fade-up">
          Lorem ipsum dolor
          sit amet consectetur.</p>
        <p data-aos="fade-up" className="text-pretty md:text-balance text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio ipsam sequi est asperiores nam recusandae quidem magni, doloremque maiores, eligendi accusantium cumque laborum pariatur dignissimos ex similique aliquid veritatis, explicabo facilis sunt voluptatem ad deserunt! Tenetur et doloribus obcaecati fuga.</p>
        <div className="grid md:grid-cols-3 justify-center md:justify-between font-bold text-sm text-blue-500 text-center">
          <div data-aos="fade-up" data-aos-duration="1400" className="py-10" >
            <p>10 K+</p>
            <p>Year of experience</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1700" className="py-10">
            <p>234 K+</p>
            <p>People raeched</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="py-10">
            <p>5 K+</p>
            <p>Services of plugin</p>
          </div>
        </div>
      </div>
      <div data-aos="fade-right" className="relative max-w-50 max-h-50 bg-purple-500 rounded-3xl">
        
      </div>
    </div>
  )
}
