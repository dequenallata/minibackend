const Pedido = require('../models/pedidoModel');

const findPedidosByNegocio = (negocioId) => Pedido.find({ negocioId });
const findEnCurso = (negocioId) => Pedido.find({ negocioId, estado: true });
const findCerrados = (negocioId, limit = 5) =>
  Pedido.find({ negocioId, estado: false }).sort({ horaInicio: -1 }).limit(limit);
const createPedido = (data) => Pedido.create(data);
const updateEstado = (id) => Pedido.findByIdAndUpdate(id, { estado: false }, { new: true });
const actualizarPedido = (id, data) => Pedido.findByIdAndUpdate(id, data, { new: true });
const borrarPedido = (id) => Pedido.findByIdAndDelete(id);

module.exports = {
  findPedidosByNegocio,
  findEnCurso,
  findCerrados,
  createPedido,
  updateEstado,
  actualizarPedido,
  borrarPedido
};