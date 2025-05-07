import { IconLogout2, IconUser, IconUserCog } from "@tabler/icons-react";

export default function UserPages() {
    return (
        <div id="container" className="flex h-[100vh]">
           <section id="navigation" className="bg-blue-500 p-10 w-[200px]">
           <h1 className="text-3xl font-bold text-center">Connect</h1>
           <div className="flex flex-col gap-2 mt-4">
            <button className="flex gap-2"> <IconUser />  Users</button>
            <button className="flex gap-2"> <IconUserCog /> Hak akses</button>
            <button className="flex gap-2"> <IconLogout2 /> Logout</button>
           </div>
           </section>
           <section id = "content">
            <input type="search" placeholder="Cari User" className="p-5 w-500"></input>
           </section>
        </div>
    );
}