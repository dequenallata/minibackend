const express = require('express');
const app = express();
const connectDB = require('./config/db');
const pedidosRoutes = require('./routes/pedidosRoutes');
const productosRoutes = require('./routes/productosRoutes');
require('dotenv').config();

connectDB();
app.use(express.json());

app.use('/api/pedidos', pedidosRoutes);
app.use('/api/productos', productosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
