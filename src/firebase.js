// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDuHamz5lf2WQNKcfo5DUyAzKQVOZtFARo",
	authDomain: "allegro-clone-2807d.firebaseapp.com",
	projectId: "allegro-clone-2807d",
	storageBucket: "allegro-clone-2807d.appspot.com",
	messagingSenderId: "713981992848",
	appId: "1:713981992848:web:a93f6bb716122b17571d15",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const register = (auth, email, password, getError) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log(user);
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;

            getError(errorCode)

			// if (errorCode == "auth/weak-password") {
			// 	alert("The password is too weak.");
			// } else if (errorCode == "auth/email-already-in-use") {
			// 	alert("There already exists an account with the given email address.");
			// } else if (errorCode == "auth/invalid-email") {
			// 	alert("Email address is not valid.");
			// } else if (errorCode == "auth/operation-not-allowed") {
			// 	alert("email/password accounts are not enabled.");
			// } else {
			// 	alert(errorCode);
			// }
		});
};

// export const register = async (email, password) => {
// 	try {
// 		const userCredential = await app
// 			.auth()
// 			.createUserWithEmailAndPassword(email, password);
// 		return userCredential.user;
// 	} catch (error) {
// 		console.error("Error during registration:", error);
// 		throw error;

// 	}
// };

// export const login = async (email, password) => {
// 	try {
// 		const userCredential = await app
// 			.auth()
// 			.signInWithEmailAndPassword(email, password);
// 		return userCredential.user;
// 	} catch (error) {
// 		console.error("Error during login:", error);
// 		throw error;
// 	}
// };
