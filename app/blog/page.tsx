import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "../lib/data";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog page",
  description: "Blogs"
}

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}});
//   if (!res.ok) {
//     throw new Error("Something Wrong!");
//   }
//   return res.json();
// }
export default async function Blog() {
  // const posts = await getData();
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
      {posts?.map((post: any, index: any) => (
        
        <Suspense fallback={<div>ddd</div>}>
          <PostCard key={index} imageSrc="/images/img.jpg" post={post._doc} />
        </Suspense>
        
      ))}
    </div>
    )
}
