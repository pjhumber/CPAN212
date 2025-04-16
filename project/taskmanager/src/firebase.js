// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpLUx43Pzm5x2KyzmKQ5nKscHFeYCg2uU",
  authDomain: "taskmanager-53f1b.firebaseapp.com",
  projectId: "taskmanager-53f1b",
  storageBucket: "taskmanager-53f1b.firebasestorage.app",
  messagingSenderId: "506035805838",
  appId: "1:506035805838:web:5ad39e2374c9ed2161b3df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;
