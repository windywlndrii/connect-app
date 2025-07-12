'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi harus sama!");
      return;
    }

    // Daftar user di Supabase
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(`Registrasi gagal: ${error.message}`);
      return;
    }

    alert("Registrasi berhasil! Silakan cek email Anda untuk verifikasi.");
    router.push('/login');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '2rem', boxShadow: '0 0 10px rgba(0,0,0,0.1)', borderRadius: '10px' }}>
      <h2>Connect With Us</h2>
      <h3>Register</h3>
      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <p style={{ fontSize: '14px' }}>
          Already have an account? <a href="/login">Login</a>
        </p>
        <button type="submit" style={{ padding: '10px', backgroundColor: 'black', color: 'white', borderRadius: '5px', border: 'none' }}>
          Register
        </button>
      </form>
    </div>
  );
}
