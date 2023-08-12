import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'



const firebaseConfig = {
  apiKey: "AIzaSyBRp-sFTXfCZXumRjjtU1OBeiKfhpKTY18",
  authDomain: "fir-tutorial-3bbfc.firebaseapp.com",
  projectId: "fir-tutorial-3bbfc",
  storageBucket: "fir-tutorial-3bbfc.appspot.com",
  messagingSenderId: "633996149887",
  appId: "1:633996149887:web:16f8e7d5299c192cd32b4a",
  measurementId: "G-R273C887WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app);