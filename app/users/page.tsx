import { IconLogout2, IconUser, IconUserCog } from "@tabler/icons-react";
import { dataUser } from "./mock/data-user";
import UserCard from "@/components/ui/user-card";

export default function UserPages() {
  const data = dataUser;
  return (
    <div id="container" className="flex h-(100vh)">
      <section id="navigation" className="bg-white-400 p-4 w-[200px]">
        <h1 className="text-3xl font-bold text-center">Connect</h1>
        <div className="flex flex-col gap-2 mt-4">
          <button className="bg-transparent border-none p-2.5 text-left text-base cursor-pointer flex items-center gap-2 text-black rounded-lg ">
            <IconUser></IconUser>user
          </button>
          <button className="bg-transparent border-none p-2.5 text-left text-base cursor-pointer flex items-center gap-2 text-black rounded-lg">
            <IconUserCog></IconUserCog>hak akses
          </button>
          <button className="bg-transparent border-none p-2.5 text-left text-base cursor-pointer flex items-center gap-2 text-black rounded-lg">
            <IconLogout2></IconLogout2>logout
          </button>
        </div>
      </section>
      <section
        id="content"
        className="bg-white w-[85%] flex-1 p-[30px] overflow-y-auto"
      >
        <input
          type="search"
          placeholder="Cari User"
          className="w-full p-3 border border-black rounded-lg mb-7 text-base"
        ></input>
        <div className="flex flex-col gap-4 user-list">
          {data.map((employee, index) => (
            <UserCard
              key={index}
              fullname={employee.fullname}
              email={employee.email}
              role={employee.role}
              status={employee.status}
            />
          ))}
        </div>
      </section>
      <button className="fixed right-5 bottom-5 w-[42px] h-[42px] rounded-lg text-[26px] bg-[#e0e0e0] border-none cursor-pointer fab">
        +
      </button>
    </div>
  );
}
