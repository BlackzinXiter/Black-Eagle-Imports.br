import {
  db,
  collection,
  addDoc
} from "./firebase.js";

let produtoSelecionado = "";
let valorSelecionado = 0;

const modal = document.getElementById("modal");

window.selecionarProduto = (produto, valor) => {

  produtoSelecionado = produto;
  valorSelecionado = valor;

  modal.style.display = "flex";
};

window.criarPedido = async () => {

  const nome = document.getElementById("nome").value;

  const uid = document.getElementById("uid").value;

  const email = document.getElementById("email").value;

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

    alert("Pedido enviado com sucesso 🔥");

    modal.style.display = "none";

  } catch (erro) {

    console.error(erro);

    alert("Erro ao enviar pedido");
  }
};