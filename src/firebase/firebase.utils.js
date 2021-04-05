import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
	apiKey: 'AIzaSyDUfT3cWJImU4H-4R6e7hVunsD0I5kWjKU',
	authDomain: 'crwn-db-63268.firebaseapp.com',
	projectId: 'crwn-db-63268',
	storageBucket: 'crwn-db-63268.appspot.com',
	messagingSenderId: '630475103178',
	appId: '1:630475103178:web:0eb15121d496588a768d33',
	measurementId: 'G-4V732SF6EP',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
