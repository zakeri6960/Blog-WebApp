import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
const inter = Inter({ subsets: ["latin"] });
import AOS from 'aos';
import 'aos/dist/aos.css'
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "MZB",
    template: "%s | MZB"
  },
  description: "A Blog website with Next.js 14",
};

export default function RootLayout({ 
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${roboto.className} relative h-screen bg-[#0a0a1e] px-4 md:px-40 py-5`}>
        <Navbar />
        
        {children}
        <Footer />
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  );
}
