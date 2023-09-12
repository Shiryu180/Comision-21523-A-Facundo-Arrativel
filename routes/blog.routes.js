const router = require ('express').Router();

router.get('/home',(req, res) =>{
    res.render('home')
})

router.get('/create',(req, res) =>{
    res.render('create')
})

router.post('/user', (req, res) => {

    const {name, lastname, id} = req.body

    res.send({
        name,
        lastname,
        id
    })
})

module.exports = router;