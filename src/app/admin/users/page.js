"use client";
import UserCard from "@/components/ui/user-card";
import { dataUser } from "@/mock/data-user";
import {
  IconUser,
  IconUserCog,
  IconLogout,
  IconPlus,
} from "@tabler/icons-react";
import useSWR from "swr";
  

export default function UserPages() {
  const data = dataUser;
  const fetcher = (...args) => fetch(...args).then(res => res.json());

const {
  data: users, 
  error, 
  isLoading }
   = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

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

   console.log(users);


  return (
    <div id="container" className="flex h-[100vh] text-black">
      <section
        id="content"
        className="bg-white w-[85%] flex-1 p-[30px]"
      >
        <input
          type="search"
          placeholder="Cari User"
          className="w-full p-3 border rounded-lg mb-7 text-base"
        ></input>
        <div className="flex flex-col gap-4">
          {users.map((employee, index) => (
            <UserCard
              key={index}
              fullname={employee.name}
              email={employee.email}
              role={employee.phone}
              status={employee.website}
            />
          ))}
        </div>
      </section>
      <button className="fixed right-5 bottom-5 w-[42px] h-[42px] rounded-lg text-[26px] bg-[#e0e0e0] cursor-pointer">
        +
      </button>
    </div>
  );
}