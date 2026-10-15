const parametro = new URLSearchParams(window.location.search);

const cliente = parametro.get('cliente');

document.getElementById('cliente').textContent = cliente;