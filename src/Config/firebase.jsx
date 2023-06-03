import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { collection } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyDjtxOG0yi59L3T6pe85mKLYqeOvELdSXQ",
  authDomain: "dev-rev-e6409.firebaseapp.com",
  projectId: "dev-rev-e6409",
  storageBucket: "dev-rev-e6409.appspot.com",
  messagingSenderId: "271996287207",
  appId: "1:271996287207:web:bad7fa4119fa2e748f4a42",
  measurementId: "G-1K250NX84E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

const colRef = collection(db, "Books")


export {app, db, colRef}