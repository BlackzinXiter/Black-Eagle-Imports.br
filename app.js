import {
db,
collection,
addDoc
} from “./firebase.js”;

alert(“APP CARREGOU”);

let produtoSelecionado = “”;
let valorSelecionado = 0;

const modal = document.getElementById(“modal”);

window.selecionarProduto = function(produto, valor) {

produtoSelecionado = produto;
valorSelecionado = valor;

modal.style.display = “flex”;
};

window.criarPedido = async function() {

alert(“BOTÃO CLICADO”);

const nome = document.getElementById(“nome”).value;
const uid = document.getElementById(“uid”).value;
const email = document.getElementById(“email”).value;

if (!nome || !uid || !email) {

alert("Preencha todos os campos");
return;

}

try {

await addDoc(collection(db, "pedidos"), {
  nome: nome,
  uid: uid,
  email: email,
  produto: produtoSelecionado,
  valor: valorSelecionado,
  status: "aguardando",
  data: new Date().toLocaleString("pt-BR")
});
alert("SALVOU NO FIREBASE");
modal.style.display = "none";
document.getElementById("nome").value = "";
document.getElementById("uid").value = "";
document.getElementById("email").value = "";

} catch (erro) {

console.error(erro);
alert("ERRO FIREBASE");

}

};

modal.addEventListener(“click”, function(event) {

if (event.target === modal) {

modal.style.display = "none";

}

});