import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAAPSDtVlQxfPcvSPGLJOUDbvssN8gZPgU",
  authDomain: "ecommerce-54085.firebaseapp.com",
  projectId: "ecommerce-54085",
  storageBucket: "ecommerce-54085.appspot.com",
  messagingSenderId: "934209356089",
  appId: "1:934209356089:web:44fc016c6db451054628e8"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db