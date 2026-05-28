import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyCaScs7CO6C9lbcZXuH3srvCiclLuTztJU",

  authDomain: "ff-recarga.firebaseapp.com",

  projectId: "ff-recarga",

  storageBucket: "ff-recarga.firebasestorage.app",

  messagingSenderId: "355569366202",

  appId: "1:355569366202:web:205eba23d354727c717e83",

  measurementId: "G-5VTDKK1T6D"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, collection, addDoc };