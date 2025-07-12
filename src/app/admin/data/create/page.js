'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function CreatePage() {
  const [form, setForm] = useState({ NIDN: '', Nama: '', Prodi: '', Mata_Kuliah: '' })
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await supabase.from('Data_Dosen').insert([form])
    router.push('/admin/data')
  }

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-xl font-bold mb-4">Tambah Dosen</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['NIDN', 'Nama', 'Prodi', 'Mata_Kuliah'].map((field) => (
          <input
            key={field}
            className="border p-2 w-full rounded"
            placeholder={field}
            value={form[field]}
            onChange={(e) => setForm({ ...form, [field]: e.target.value })}
          />
        ))}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Simpan
        </button>
      </form>
    </div>
  )
}
