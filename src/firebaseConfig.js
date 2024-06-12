import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const apiKey = process.env.FIREBASE_KEY;

const firebaseConfig = {
	apiKey: apiKey,
	authDomain: "source-data-demo.firebaseapp.com",
	projectId: "source-data-demo",
	storageBucket: "source-data-demo.appspot.com",
	messagingSenderId: "745827162277",
	appId: "1:745827162277:web:057223825c4e29dedd554c",
	measurementId: "G-M39TF1G4GP",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
