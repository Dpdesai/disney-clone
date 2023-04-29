import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBbI0EYphIYNdv7ek-oHmrpidinx-qzsEI",
    authDomain: "disney-clone-a7011.firebaseapp.com",
    projectId: "disney-clone-a7011",
    storageBucket: "disney-clone-a7011.appspot.com",
    messagingSenderId: "142999146111",
    appId: "1:142999146111:web:48eeb14aa7504aa224f94a",
    measurementId: "G-XQ7S2PGQD4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);


export { auth, provider, storage };
export default db;