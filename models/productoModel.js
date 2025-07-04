const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  negocioId: { type: String, required: true }
});

module.exports = mongoose.model('Producto', productoSchema);
