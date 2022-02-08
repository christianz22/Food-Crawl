import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-HzToIcZHISZEH1saDDHefbSP_l3TDoc",
  authDomain: "food-crawl-gc.firebaseapp.com",
  projectId: "food-crawl-gc",
  storageBucket: "food-crawl-gc.appspot.com",
  messagingSenderId: "734215482668",
  appId: "1:734215482668:web:59be2f1fb96c1c0b0cd089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

// Sign in
export function signInWithGoogle(): void {
    signInWithPopup(auth, authProvider);
};

export function signOut(): void {
    auth.signOut();
}

export const storage = getStorage(app);