import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);

export const register = (auth, email, password, getError, navigate) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
			navigate("/");
		})
		.catch((error) => {
			const errorCode = error.code;
			getError(errorCode);
		});
};

export const login = (auth, email, password, getError) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			console.log(user);
		})
		.catch((error) => {
			const errorCode = error.code;
			getError(errorCode);
		});
};