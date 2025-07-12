"use client";
import {
  IconDatabase,
  IconLogout2,
  IconNews,
  IconUser,
  IconUserBolt,
  IconUserCog,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  return (
    <div id="container" className="flex h-[100vh] text-black">
      <section
        id="navigation"
        className="bg-white p-10 w-[220px] border-r flex flex-col"
      >
        <h1 className="text-3xl font-bold text-center">Connect</h1>
        <div className="flex flex-col gap-3 mt-15">
          <a
            href="/admin/users"
            className={`p-2.5 flex items-center gap-2 rounded-lg font-bold ${
              pathname === "/admin/users" ? "bg-black text-white" : "text-black"
            }`}
          >
            <IconUser /> Users
          </a>
          <a
            href="/admin/roles"
            className={`p-2.5 flex items-center gap-2 rounded-lg font-bold ${
              pathname === "/admin/roles" ? "bg-black text-white" : "text-black"
            }`}
          >
            <IconUserCog /> Hak akses
          </a>
          <a
            href="/admin/news"
            className={`p-2.5 flex items-center gap-2 rounded-lg font-bold ${
              pathname === "/admin/news" ? "bg-black text-white" : "text-black"
            }`}
          >
            <IconNews /> Berita
            </a>
            <a
            href="/admin/data"
            className={`p-2.5 flex items-center gap-2 rounded-lg font-bold ${
              pathname === "/admin/data" ? "bg-black text-white" : "text-black"
            }`}
          >
            <IconDatabase /> Data Dosen
            </a>
            <a
            href="/login"
            className={`p-2.5 flex items-center gap-2 rounded-lg font-bold ${
              pathname === "/login" ? "bg-black text-white" : "text-black"
            }`}
          >
            <IconLogout2 /> Logout
          </a>
        </div>
      </section>
      <section
        id="content"
        className="bg-white w-[85%] flex-1 p-[30px] overflow-y-auto"
      >
        <div className="flex flex-col gap-4">
          {children}
        </div>
      </section>
    </div>
  )
};
