import { db } from "./firebase.js";

import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const lista = document.getElementById("listaPedidos");

async function alterarStatus(id, status){

  await updateDoc(
    doc(db, "pedidos", id),
    {
      status: status
    }
  );

  carregarPedidos();
}

async function excluirPedido(id){

  const confirmar = confirm(
    "Deseja excluir este pedido?"
  );

  if(!confirmar) return;

  await deleteDoc(
    doc(db, "pedidos", id)
  );

  carregarPedidos();
}

window.alterarStatus = alterarStatus;
window.excluirPedido = excluirPedido;

async function carregarPedidos(){

  lista.innerHTML = "";

  const querySnapshot = await getDocs(
    collection(db, "pedidos")
  );

  let totalPedidos = 0;
  let totalVendas = 0;
  let aguardando = 0;
  let entregues = 0;

  let htmlResumo = "";

  querySnapshot.forEach((documento) => {

    totalPedidos++;

    const pedido = documento.data();

    totalVendas += Number(pedido.valor || 0);

    if(pedido.status === "aguardando"){
      aguardando++;
    }

    if(pedido.status === "entregue"){
      entregues++;
    }

  });

  htmlResumo = `

    <div class="pedido">

      <h2>📊 Resumo</h2>

      <p><strong>Pedidos:</strong> ${totalPedidos}</p>

      <p><strong>Total vendido:</strong> R$ ${totalVendas.toFixed(2)}</p>

      <p><strong>Aguardando:</strong> ${aguardando}</p>

      <p><strong>Entregues:</strong> ${entregues}</p>

    </div>

  `;

  lista.innerHTML += htmlResumo;

  querySnapshot.forEach((documento) => {

    const pedido = documento.data();

    lista.innerHTML += `

      <div class="pedido">

        <h2>${pedido.produto}</h2>

        <p><strong>Nome:</strong> ${pedido.nome}</p>

        <p><strong>UID:</strong> ${pedido.uid}</p>

        <p><strong>Email:</strong> ${pedido.email}</p>

        <p><strong>Valor:</strong> R$ ${pedido.valor}</p>

        <p><strong>Status:</strong> ${pedido.status}</p>

        <p><strong>Data:</strong> ${pedido.data}</p>

        <br>

        <button onclick="alterarStatus('${documento.id}','aguardando')">
          ⏳ Aguardando
        </button>

        <button onclick="alterarStatus('${documento.id}','entregue')">
          ✅ Entregue
        </button>

        <button onclick="alterarStatus('${documento.id}','cancelado')">
          ❌ Cancelado
        </button>

        <button onclick="alterarStatus('${documento.id}','reembolsado')">
          💸 Reembolsado
        </button>

        <button onclick="excluirPedido('${documento.id}')">
          🗑 Excluir
        </button>

      </div>

    `;

  });

}

carregarPedidos();