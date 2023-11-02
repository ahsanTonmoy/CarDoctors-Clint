// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVU9GBfrlmjDgrJ9KndKYjINvPIACoPNs",
  authDomain: "car-doctor-d9112.firebaseapp.com",
  projectId: "car-doctor-d9112",
  storageBucket: "car-doctor-d9112.appspot.com",
  messagingSenderId: "990189868912",
  appId: "1:990189868912:web:92cb203b516dd3a524a1b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;