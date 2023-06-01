'use client';
import React, { useEffect } from 'react';
import { useAuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import useAuth from '@/hooks/useAuth';

function Page() {
  const { user } = useAuthContext();
  const router = useRouter();
  const { logout } = useAuth();

  useEffect(() => {
    if (user == null) router.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <h1>Only logged in users can view this page</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Page;
