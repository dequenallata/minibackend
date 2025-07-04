const Producto = require('../models/productoModel');

const findAll = (negocioId) => Producto.find({ negocioId });
const findById = (negocioId, id) => Producto.findOne({ _id: id, negocioId });
const create = (data) => Producto.create(data);
const update = (negocioId, id, data) =>
  Producto.findOneAndUpdate({ _id: id, negocioId }, data, { new: true });
const remove = (negocioId, id) =>
  Producto.findOneAndDelete({ _id: id, negocioId });

module.exports = {
  findAll,
  findById,
  create,       
  update,
  remove
};