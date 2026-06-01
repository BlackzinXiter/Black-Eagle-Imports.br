import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyCaScs7CO6C9lbcZXuH3srvCiclLuTztJU",

authDomain: "ff-recarga.firebaseapp.com",

projectId: "ff-recarga",

storageBucket: "ff-recarga.firebasestorage.app",

messagingSenderId: "355569366202",

appId: "1:355569366202:web:205eba23d354727c717e83"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);