import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC7qwbFSXpK7321OE7iGXbIp6iuEvDUMVY",
  authDomain: "ecib-nextjs.firebaseapp.com",
  projectId: "ecib-nextjs",
  storageBucket: "ecib-nextjs.appspot.com",
  messagingSenderId: "277578214878",
  appId: "1:277578214878:web:67782266a299eb0043c14f",
  measurementId: "G-MKX94W0KLD",
};

const app = !firebase?.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
