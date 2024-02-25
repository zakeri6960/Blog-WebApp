"use client"
import { addContact } from "@/app/lib/serverAction";
import Aos from "aos"
import { useEffect } from "react"

// export const metadata: Metadata = {
//   title: "MZB | Contact page",
//   description: "A Web blog with Next.js 14",
// };

export default function ContactPage() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
    })
    return (
      <div className="grid grid-rows-2 md:grid-cols-2 w-full pt-32">
        <div data-aos="fade-right" className="relative max-w-50 max-h-50 bg-blue-500 before:absolute before:min-w-10 before:min-h-10 before:bg-red-700 before:rounded-md before:-mt-20">
          
        </div>
        <div className="pb-10 pt-10 md:pb-0 md:pt-0">
          <form action={addContact} className="flex flex-col p-4  text-center gap-3 text-white">
            <div>
              <input data-aos="fade-up" data-aos-duration="1000" className="w-full md:w-[80%] bg-white/10 py-3 px-4 text-xs rounded" name="name" type="text" placeholder="Name and Surname"/>
            </div>
            <div>
              <input data-aos="fade-up" data-aos-duration="1200" className="w-full md:w-[80%] bg-white/10 py-3 px-4 text-xs rounded" name="email" type="text" placeholder="Email address"/>
            </div>
            <div>
              <input data-aos="fade-up" data-aos-duration="1400" className="w-full md:w-[80%] bg-white/10 py-3 px-4 text-xs rounded" name="phone" type="text" placeholder="Phone Number (Optional)"/>
            </div>
            <div>
              <textarea data-aos="fade-up" data-aos-duration="1600" className="w-full md:w-[80%] h-40 bg-white/10 py-3 px-4 text-start text-xs rounded" name="message" placeholder="Message"/>
            </div>
            <div>
              <button data-aos="fade-up" data-aos-duration="1800" className="w-full md:w-[80%] bg-blue-500 text-white hover:bg-blue-700 py-3 px-4 text-xs rounded" type="submit" >Send</button>
            </div>
          </form>
        </div>
      </div>
  )
}
