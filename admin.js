import { db } from "./firebase.js";

import {

doc,
setDoc

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

window.salvarMVP = async ()=>{

await setDoc(
doc(db,"mvp","atual"),
{
nick:nick.value,
foto:foto.value,
descricao:descricao.value
}
);

alert("MVP atualizado");

};