const express = require ('express');
const router = express.Router ();

const productosControllers = require ('../controllers/productosControllers');

//importar el controlador

router.get ('/', productosControllers.index);

router.post ('/add', productosControllers.add);
router.get('/proedit/:id', productosControllers.edit);
router.post('/edit/:id', productosControllers.update);
router.get('/delete/:id', productosControllers.delete);


module.exports = router;