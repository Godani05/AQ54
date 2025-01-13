// firebaseAuth.ts
import { getAuth, signInWithEmailAndPassword, signOut, User } from "firebase/auth";
import {app} from "./firebaseconfig";

const auth = getAuth(app);

// Connexion d'un utilisateur
export const login = async (email: string, password: string): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// Déconnexion d'un utilisateur
export const logout = async (): Promise<void> => {
  await signOut(auth);
};
