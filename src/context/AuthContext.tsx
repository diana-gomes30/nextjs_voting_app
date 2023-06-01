'use client';
import React, { ReactNode, createContext, useContext, useState } from 'react';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import firebaseApp from '@/firebase/config';

const auth = getAuth(firebaseApp);

let test;
let test2 = null;

export const AuthContext = createContext<{ user: User | null }>({ user: null });

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
