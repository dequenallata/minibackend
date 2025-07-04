const service = require('../services/pedidosService');

exports.getPedidos = async (req, res) => {
  const pedidos = await service.obtenerPedidos(req.negocioId);
  res.json(pedidos);
};

exports.postPedido = async (req, res) => {
  const pedido = await service.nuevoPedido(req.negocioId, req.body);
  res.status(201).json(pedido);
};

exports.putCerrar = async (req, res) => {
  const result = await service.cerrarPedido(req.params.id);
  res.json(result);
};

exports.putActualizar = async (req, res) => {
  const actualizado = await service.actualizarPedido(req.params.id, req.body);
  res.json(actualizado);
};

exports.deletePedido = async (req, res) => {
  await service.eliminarPedido(req.params.id);
  res.status(204).send(); 
};