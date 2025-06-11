"use client";
import PostCard from "@/components/post-card";
import { dataUser } from "@/mock/data-user";
import useSWR from "swr";
  

export default function NewsPages() {
  
  const fetcher = (...args) => fetch(...args).then(res => res.json());

const {
  data: posts, 
  error, 
  isLoading }
   = useSWR(`https://jsonplaceholder.typicode.com/posts`, fetcher);

   if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
   }

   if (error) {
    return  (
      <div>
        <p>Gagal Membuat Data</p>
      </div>
    );
   }

   console.log(posts);



  return (
    <div id="container" className="flex h-[100vh] text-black">
      <section
        id="News"
        className="bg-white w-[85%] flex-1 p-[30px]"
      >
        <input
          type="search"
          placeholder="Cari Berita"
          className="w-full p-3 border rounded-lg mb-7 text-base"
        ></input>
        <div className="flex flex-col gap-4">
          {posts.map((employee, index) => (
            <PostCard
              key={index}
              id={employee.id}
              title={employee.title}
              body={employee.body}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
