'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function EditPage() {
  const [form, setForm] = useState({ id: 0, NIDN: '', Nama: '', Prodi: '', Mata_Kuliah: '' })
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = Number(searchParams.get('id'))

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from('Data_Dosen').select('*').eq('id', id).single()
      if (data) setForm(data)
    }
    if (id) getData()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await supabase.from('Data_Dosen').update(form).eq('id', form.id)
    router.push('/admin/data')
  }

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-xl font-bold mb-4">Edit Dosen</h1>
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
        <button type="submit" className="bg-yellow-600 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  )
}
