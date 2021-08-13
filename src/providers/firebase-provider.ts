import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

interface FirebaseConfig {
	apiKey: string;
	authDomain: string;
	projectId: string;
	messagingSenderId: string;
	appId: string;
}

const firebaseConfig: FirebaseConfig = {
	apiKey: process.env.VUE_APP_API_KEY,
	authDomain: process.env.VUE_APP_AUTH_DOMAIN,
	projectId: process.env.VUE_APP_PROJECT_ID,
	messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
	appId: process.env.VUE_APP_APP_ID
};

firebase.default.initializeApp(firebaseConfig);

export const auth: firebase.default.auth.Auth = firebase.default.auth();
export const firestore: firebase.default.firestore.Firestore = firebase.default.firestore();