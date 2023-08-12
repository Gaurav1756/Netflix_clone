import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC0MyCnT18mUXH1lHrQyADqHpvf1IWP9KM",
  authDomain: "netflix-clone-8cc7d.firebaseapp.com",
  projectId: "netflix-clone-8cc7d",
  storageBucket: "netflix-clone-8cc7d.appspot.com",
  messagingSenderId: "535729823033",
  appId: "1:535729823033:web:2caac47e4cbcf1f20d5ce8",
  measurementId: "G-7DVY9K01H7"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)