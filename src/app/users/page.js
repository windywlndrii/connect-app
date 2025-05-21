import UserCard from "@/components/ui/user-card";
import {
  IconLogout2,
  IconUser,
  IconUserBolt,
  IconUserCog,
} from "@tabler/icons-react";

export default function UserPages() {
  return (
    <div id="container" className="flex h-[100vh] text-black">
      <section
        id="navigation"
        className="bg-white p-10 w-[220px] border-r flex flex-col"
      >
        <h1 className="text-3xl font-bold text-center">Connect</h1>
        <div className="flex flex-col gap-3 mt-15">
          <button className="p-2.5 text-left text-base cursor-pointer flex items-center gap-2 rounded-lg font-bold">
            <IconUser /> Users
          </button>
          <button className="p-2.5 text-left text-base cursor-pointer flex items-center gap-2 rounded-lg font-bold">
            <IconUserCog /> Hak akses
          </button>
          <button className="p-2.5 text-left text-base cursor-pointer flex items-center gap-2 rounded-lg font-bold">
            <IconLogout2 /> Logout
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
          className="w-full p-3 border rounded-lg mb-7 text-base"
        ></input>
        <div className="flex flex-col gap-4">
          <UserCard />
        </div>
      </section>
      <button className="fixed right-5 bottom-5 w-[42px] h-[42px] rounded-lg text-[26px] bg-[#e0e0e0] cursor-pointer">
        +
      </button>
    </div>
  );

}


