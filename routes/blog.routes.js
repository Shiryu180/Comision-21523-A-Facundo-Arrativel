const { crearPublicacion, verCreacion, verHome, obtenerPublicaciones, actualizarPublicaciones, eliminarPublicaciones, verEdicion } = require('../controllers/blog.controllers');

const router = require ('express').Router();

router.get('/',verHome)

router.get('/create', verCreacion)

// router.get('/create/:id', verEdicion)

router.post('/publicacion', crearPublicacion);

router.get('/publicaciones', obtenerPublicaciones);

router.put('/publicacion/:id', actualizarPublicaciones);

router.delete('/publicacion/:id', eliminarPublicaciones);

module.exports = router;