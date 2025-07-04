const service = require('../services/productosService');

exports.getProductos = async (req, res) => {
  const lista = await service.obtenerProductos(req.negocioId);
  res.json(lista);
};

exports.getProductoById = async (req, res) => {
  const producto = await service.obtenerPorId(req.negocioId, req.params.id);
  if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
  res.json(producto);
};

exports.postProducto = async (req, res) => {
  const nuevo = await service.crearProducto(req.negocioId, req.body);
  res.status(201).json(nuevo);
};

exports.putActualizarProducto = async (req, res) => {
  const actualizado = await service.actualizarProducto(req.negocioId, req.params.id, req.body);
  if (!actualizado) return res.status(404).json({ message: 'No encontrado o sin permisos' });
  res.json(actualizado);
};

exports.deleteProducto = async (req, res) => {
  const eliminado = await service.eliminarProducto(req.negocioId, req.params.id);
  if (!eliminado) return res.status(404).json({ message: 'No encontrado o sin permisos' });
  res.status(204).send();
};
