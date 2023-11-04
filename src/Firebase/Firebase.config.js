// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPpEaQh99qApTsU6sZSEZQRPN_XGOP9mc",
  authDomain: "jobzenithfinder.firebaseapp.com",
  projectId: "jobzenithfinder",
  storageBucket: "jobzenithfinder.appspot.com",
  messagingSenderId: "105242233949",
  appId: "1:105242233949:web:1d2ca3cf8624dcbfa051b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;