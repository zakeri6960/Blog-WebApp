"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({ item } : { item: { path: string; title: string } }) {
  const pathName = usePathname();

  return (
    <Link href={item.path} className={clsx(
          " text-white hover:text-blue-400 text-sm",
          { "text-blue-500 sm:text-blue-500 md:text-blue-500": pathName == item.path }
        )}>
        
        {item.title}
    </Link>
  );
}
