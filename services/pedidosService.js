const repo = require('../repositories/pedidosRepository');

const obtenerPedidos = async (negocioId) => ({
  enCurso: await repo.findEnCurso(negocioId),
  cerrados: await repo.findCerrados(negocioId),
});

const nuevoPedido = async (negocioId, pedido) => {
  return await repo.createPedido({ ...pedido, negocioId });
};

const cerrarPedido = async (id) => {
  return await repo.updateEstado(id); 
};

const actualizarPedido = async (id, data) => {
  return await repo.actualizarPedido(id, data);
};

const eliminarPedido = async (id) => {
  return await repo.borrarPedido(id);
};

module.exports = {
  obtenerPedidos,
  nuevoPedido,
  cerrarPedido,
  actualizarPedido,
  eliminarPedido
};