const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  producto: String, // nombre del producto
  cantidad: Number, // cantidad del producto
  precioUnitario: Number, // precio unitario del producto
});

const pedidoSchema = new mongoose.Schema({
  negocioId: { type: String, required: true }, //id
  estado: { type: Boolean, default: true }, // true: en curso, false: cerrado
  horaInicio: { type: Date, required: true }, // fecha y hora de inicio del pedido
  cliente: { type: String }, // nombre del cliente
  total: Number,  // total del pedido
 tipoPedido: { type: Number, enum: [0, 1], required: true }, // 0: mostrador , 1: para llevar
  items: [itemSchema],
});

module.exports = mongoose.model('Pedido', pedidoSchema);
