import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC-uvBBwvjkH4C73QrQTpId4NOYaTUqR4Q",
    authDomain: "pj-crud-app.firebaseapp.com",
    projectId: "pj-crud-app",
    storageBucket: "pj-crud-app.appspot.com",
    messagingSenderId: "422330980982",
    appId: "1:422330980982:web:0cba59e198d4281288dd57"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app)

export { auth, db }