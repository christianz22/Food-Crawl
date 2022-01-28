import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-HzToIcZHISZEH1saDDHefbSP_l3TDoc",
  authDomain: "food-crawl-gc.firebaseapp.com",
  projectId: "food-crawl-gc",
  storageBucket: "food-crawl-gc.appspot.com",
  messagingSenderId: "734215482668",
  appId: "1:734215482668:web:8003fa455a207b260cd089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
    signInWithPopup(auth, authProvider);
};

export function signOut(): void {
    auth.signOut();
}