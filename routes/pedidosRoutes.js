const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/pedidosController');
const negocioMiddleware = require('../middlewares/negocioMiddleware');

router.use(negocioMiddleware);

router.get('/', ctrl.getPedidos);
router.post('/', ctrl.postPedido);
router.put('/:id/cerrar', ctrl.putCerrar);

router.put('/:id', ctrl.putActualizar);     
router.delete('/:id', ctrl.deletePedido);

module.exports = router;
