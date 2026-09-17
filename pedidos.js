// Lista inicial de pedidos de ejemplo
const pedidos = [
  { id: 1, cliente: "Juan Pérez", producto: "Teclado mecánico", cantidad: 1 },
  { id: 2, cliente: "Ana Gómez", producto: "Monitor 24 pulgadas", cantidad: 2 }
];

function mostrarPedidos() {
  const lista = document.getElementById("lista-pedidos");
  lista.innerHTML = "";
  pedidos.forEach(p => {
    const item = document.createElement("li");
    item.textContent = `Pedido #${p.id} - ${p.cliente}: ${p.cantidad}x ${p.producto}`;
    lista.appendChild(item);
  });
}

function filtrarPedidos() {
  const texto = document.getElementById("buscador").value.toLowerCase();
  const filtrados = pedidos.filter(p => p.cliente.toLowerCase().includes(texto));
  const lista = document.getElementById("lista-pedidos");
  lista.innerHTML = "";
  filtrados.forEach(p => {
    const item = document.createElement("li");
    item.textContent = `Pedido #${p.id} - ${p.cliente}: ${p.cantidad}x ${p.producto}`;
    lista.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarPedidos();
  document.getElementById("buscador").addEventListener("input", filtrarPedidos);
});