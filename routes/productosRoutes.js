const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productosController');
const negocioMiddleware = require('../middlewares/negocioMiddleware');

router.use(negocioMiddleware);

router.get('/', ctrl.getProductos);             
router.get('/:id', ctrl.getProductoById);       
router.post('/', ctrl.postProducto);            
router.put('/:id', ctrl.putActualizarProducto); 
router.delete('/:id', ctrl.deleteProducto);     

module.exports = router;
