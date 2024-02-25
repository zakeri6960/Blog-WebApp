import AboutPage from "@/components/aboutPage/AboutPage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About page",
  description: "about my website"
}

export default function About() {
  
    return (
      <AboutPage />
  )
}
