// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// import { getAnalytics } from "firebase/analytics";
const { getAuth, GoogleAuthProvider } = require("firebase/auth");
const { getFirestore } = require("firebase/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoZdmx5Qi2POZiLmeFtdS8keAq0z_Aipk",
  authDomain: "kiwi-foods.firebaseapp.com",
  projectId: "kiwi-foods",
  storageBucket: "kiwi-foods.appspot.com",
  messagingSenderId: "480850970962",
  appId: "1:480850970962:web:1b5c4f8be14e1b50df528b",
  measurementId: "G-E73SJBRCTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

exports.auth = getAuth(app);
exports.provider = new GoogleAuthProvider();
exports.db = getFirestore(app);