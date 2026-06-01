import { db } from "./firebase.js";

import {

doc,
getDoc

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

async function carregarMVP(){

const snap = await getDoc(
doc(db,"mvp","atual")
);

if(!snap.exists()) return;

const dados = snap.data();

document.getElementById("mvpFoto").src =
dados.foto;

document.getElementById("mvpNick").innerText =
dados.nick;

document.getElementById("mvpDescricao").innerText =
dados.descricao;

}

carregarMVP();