const express = require ('express');
const router = express.Router ();
const contactContollers = require ('../controllers/contactControllers');


//importar el controlador

router.get ('/', contactContollers.index);

router.post ('/add', contactContollers.add);
router.get('/edit/:id', contactContollers.edit);
router.post('/edit/:id', contactContollers.update);
router.get('/change/:id', contactContollers.change);
router.get('/delete/:id', contactContollers.delete);


module.exports = router;