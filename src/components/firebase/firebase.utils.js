// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBDyYrRTcyXLbC0EqvVWBm5kfPU4cemu0k",
  authDomain: "crwn-db-92660.firebaseapp.com",
  projectId: "crwn-db-92660",
  storageBucket: "crwn-db-92660.firebasestorage.app",
  messagingSenderId: "580392452995",
  appId: "1:580392452995:web:92b5fbc0f7af646d542cb6",
  measurementId: "G-7CXGMBVE7T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const Firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = async () =>
  await signInWithPopup(auth, provider);

export default app;
