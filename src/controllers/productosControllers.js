const Producto = require ('../model/product');

const productosControllers = {
    index: async(req, res)=> {
    //res.send ('Listado Tareas')
    const products = await Producto.find ();
     res.render('productos', { products });
},
add: async(req, res)=> {
    //res.send ('Agregar tareas')
    const producto = new Producto(req.body);
    await producto.save();
    res.redirect('/productos');
},
edit: async(req, res)=> {
    let id = req.params.id;
    const producto = await Producto.findById (id);
    res.render ('/productos/proedit', {producto});
    //res.send ('Formulario de actualizacion')
},
update: async (req, res)=> {
    //res.send ('Actualización de Tareas');
    let id = req.params.id;
    const producto = await Producto.updateOne ({_id: id}, req.body);
    res.redirect ('/productos');
},
delete: async(req, res)=> {
    let id = req.params.id;
    await Producto.deleteOne ({_id: id})
    res.redirect ('/productos');
    //res.send ('Borrado Tareas')
},

};

module.exports = productosControllers;