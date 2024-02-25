import ContactPage from "@/components/contactPage/contactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page",
  description: "Contact us using the form"
}

export default function Contact() {
  
    return (
      <ContactPage />
  )
}
