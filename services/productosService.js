const repo = require('../repositories/productosRepository');

const obtenerProductos = (negocioId) => repo.findAll(negocioId);
const obtenerPorId = (negocioId, id) => repo.findById(negocioId, id);
const crearProducto = (negocioId, data) => repo.create({ ...data, negocioId });
const actualizarProducto = (negocioId, id, data) => repo.update(negocioId, id, data);
const eliminarProducto = (negocioId, id) => repo.remove(negocioId, id);

module.exports = {
  obtenerProductos,
  obtenerPorId,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};
