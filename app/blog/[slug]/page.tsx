import Image from "next/image";
import { getPost, getUser } from "../../lib/data";
import { PageProps } from "@/.next/types/app/layout";

// const getData = async (param: any) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${param}`, {next: {revalidate:3600}});
//   if (!res.ok) {
//     throw new Error(`${res.status}`);
//   }
//   return res.json();
// }

export async function generateMetadata({ params: {slug} }: PageProps) {
  const data = await getPost(slug);
  return {
    title: data?.title,
    description: data?.desc,
  };
} 

export default async function SinglePostPage({params}: {params:any}) {
    // const data = await getData(params.slug);
  const data = await getPost(params.slug);
  const user = await getUser(data?.userId);
  
    return (
      <div className="flex flex-col md:flex-row gap-32 md:gap-8 text-white mt-20">
        <Image src={'/images/img.jpg'} className="rounded-xl md:rounded-none aspect-video min-h-96" width={400} height={400} alt="" />
        <div className="flex flex-col gap-7 pl-6">
          <p className="text-6xl pb-5">{data?.title}</p>
          <div className="flex flex-row gap-8">
            <Image className="rounded-full" src={'/images/img.jpg'} width={60} height={10} alt={""} />
            <div className="">
              <p className="text-white/50">Author</p>
              <p className="text-sm">{ user?.username }</p>
            </div>
            <div>
              <p className="text-white/50">Published</p>
              <p className="text-sm">01/01/2024</p>
            </div>
          </div>
          <p className="text-white/70">{data?.desc}</p>
        </div>
      </div>
  )
}

""
