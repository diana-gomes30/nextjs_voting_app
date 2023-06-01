import firebase_app from '@/firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  signOut,
} from 'firebase/auth';

const auth = getAuth(firebase_app);

const useAuth = () => {
  const signUp = async (email: string, password: string) => {
    let result = null,
      error = null;
    try {
      result = await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      error = e;
    }

    return { result, error };
  };

  const signIn = async (email: string, password: string) => {
    let result = null,
      error = null;
    try {
      result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      error = e;
    }

    return { result, error };
  };

  const logout = () => {
    signOut(auth);
  };

  return { signUp, signIn, logout };
};

export default useAuth;
