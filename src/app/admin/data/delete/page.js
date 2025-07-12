'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function DeletePage() {
  const [nama, setNama] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const id = Number(searchParams.get('id'))

  useEffect(() => {
    const getDosen = async () => {
      const { data } = await supabase.from('Data_Dosen').select('Nama').eq('id', id).single()
      if (data) setNama(data.Nama)
    }
    if (id) getDosen()
  }, [id])

  const handleDelete = async () => {
    await supabase.from('Data_Dosen').delete().eq('id', id)
    router.push('/admin/data')
  }

  return (
    <div className="max-w-md mx-auto mt-20 px-4 text-center">
      <h2 className="text-xl mb-4 font-semibold">Hapus Dosen</h2>
      <p className="mb-6">Yakin ingin menghapus <strong>{nama}</strong>?</p>
      <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded mr-2">
        Hapus
      </button>
      <button onClick={() => router.push('/admin/data')} className="bg-gray-400 text-white px-4 py-2 rounded">
        Batal
      </button>
    </div>
  )
}
