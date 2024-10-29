// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYuw4tB_Pg0uFGNXMOSP-tyZx2Oy3ul0c",
    authDomain: "e-commerce-b9f01.firebaseapp.com",
    projectId: "e-commerce-b9f01",
    storageBucket: "e-commerce-b9f01.appspot.com",
    messagingSenderId: "495487132108",
    appId: "1:495487132108:web:607650c25e00fc36877d69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);