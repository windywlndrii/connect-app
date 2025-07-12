'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function DataPage() {
  const [dosenList, setDosenList] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const { data } = await supabase.from('Data_Dosen').select('*')
    setDosenList(data || [])
  }

  return (
    <div className="max-w-4xl mt-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Data Dosen</h1>
      <Link href="/admin/data/create" className="bg-green-600 text-white px-4 py-2 rounded inline-block">
        + Tambah Dosen
      </Link>
      <table className="w-full border mt-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border px-2 py-1">NIDN</th>
            <th className="border px-2 py-1">Nama</th>
            <th className="border px-2 py-1">Prodi</th>
            <th className="border px-2 py-1">Mata Kuliah</th>
            <th className="border px-2 py-1">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dosenList.map((dosen) => (
            <tr key={dosen.id}>
              <td className="border px-2 py-1">{dosen.NIDN}</td>
              <td className="border px-2 py-1">{dosen.Nama}</td>
              <td className="border px-2 py-1">{dosen.Prodi}</td>
              <td className="border px-2 py-1">{dosen.Mata_Kuliah}</td>
              <td className="border px-2 py-1 space-x-2">
                <Link href={`/admin/data/edit?id=${dosen.id}`} className="inline-flex items-center gap-1 px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600 transition cursor-pointer">Edit</Link>
                <Link href={`/admin/data/delete?id=${dosen.id}`} className="inline-flex items-center gap-1 px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 transition cursor-pointer">Hapus</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
