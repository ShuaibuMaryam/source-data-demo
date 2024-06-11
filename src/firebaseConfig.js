import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBvAkkOYMr9QtH7mxEHgQ6Rqfr0QI_Lzfk",
	authDomain: "final-year-project-1b430.firebaseapp.com",
	projectId: "final-year-project-1b430",
	storageBucket: "final-year-project-1b430.appspot.com",
	messagingSenderId: "604146042189",
	appId: "1:604146042189:web:69a143078503f845d82304",
	measurementId: "G-PKCDBPHJMW",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
