const { crearPublicacion, verCreacion, verHome, obtenerPublicaciones, actualizarPublicacion, eliminarPublicacion} = require('../controllers/blog.controllers');

const router = require ('express').Router();

router.get('/',verHome)

router.get('/create', verCreacion)

router.get('/editar/:id', (req, res)=> {
    res.render('editar', {id:req.params.id })
})

router.post('/publicacion', crearPublicacion);

router.get('/publicaciones', obtenerPublicaciones);

router.put('/publicacion/:id', actualizarPublicacion);

router.delete('/publicacion/:id', eliminarPublicacion);

module.exports = router;