'use client';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const router = useRouter();
  const { user } = useAuthContext();

  useEffect(() => {
    if (user != null) router.push('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}
