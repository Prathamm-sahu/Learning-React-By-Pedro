// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6dVZneRvoXU-AtaccXSAGl9Ok7bWeOqs",
  authDomain: "chat-app-bf4a9.firebaseapp.com",
  projectId: "chat-app-bf4a9",
  storageBucket: "chat-app-bf4a9.appspot.com",
  messagingSenderId: "666739242494",
  appId: "1:666739242494:web:26b956c0694358b8cb7caf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
