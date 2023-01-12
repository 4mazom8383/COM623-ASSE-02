// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPIwFPLuMcWzbQVq3mv23ASiEzQm_QuL4",
  authDomain: "asse02projectmanagment.firebaseapp.com",
  projectId: "asse02projectmanagment",
  storageBucket: "asse02projectmanagment.appspot.com",
  messagingSenderId: "1001054365843",
  appId: "1:1001054365843:web:5041199c2eaa0376e94566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize database
export const database = getFirestore(app)


export default firebaseConfig; 
