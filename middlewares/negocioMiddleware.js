module.exports = (req, res, next) => {
const negocioId = req.header('X-Negocio-ID');

if (!negocioId) {
  return res.status(400).json({ message: 'Negocio ID es requerido' });
}

req.negocioId = negocioId;
  next();
};