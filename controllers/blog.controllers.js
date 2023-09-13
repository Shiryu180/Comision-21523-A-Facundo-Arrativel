const ctrl = {}
const Publicaciones = require('../models/Publicaciones');

ctrl.verCreacion = async (req, res) => {
    res.render('create')
}

ctrl.verHome = async (req, res) => {
    res.render('homeprueba', { Publicaciones })
}


ctrl.crearPublicacion = async (req, res) => {

    try {
        const publicaciones = await Publicaciones.create(req.body);
    
        res.send({ msg: "Publicacion creada con exito", publicaciones})
        
    } catch (error) {
        return res.status(500).json({msg:"Error al crear nueva publicacion"})
    }
}



ctrl.obtenerPublicaciones = async (req, res) => {

    const publicaciones = await Publicaciones.findAll();
    res.json(publicaciones)
}

ctrl.actualizarPublicaciones = async (req, res) => {

    const { id } = req.params;
    const publicacion = await Publicaciones.findByPk(id)
    publicacion.set(req.body)
    await publicacion.save()

    res.json({msg: "Publicacion actualizada correctamente"})

        }

ctrl.eliminarPublicaciones = async (req, res) => {

    const { id } = req.params;
    await publicacion.destroy({
        where:{
            id
        }
    })
    res.json({msg: "Publicacion eliminada correctamente"})

        
    }

    module.exports = ctrl;