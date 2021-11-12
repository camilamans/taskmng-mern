const Contact = require ('../model/index');

const contactContollers = {
    index: async(req, res)=> {
    //res.send ('Listado Tareas')
    const contacts = await Contact.find ();
     res.render('index', { contacts });
},
add: async(req, res)=> {
    //res.send ('Agregar tareas')
    const contact = new Contact(req.body);
    await contact.save();
    res.redirect('/');
},
edit: async(req, res)=> {
    let id = req.params.id;
    const contact = await Contact.findById (id);
    res.render ('edit', {contact});
    //res.send ('Formulario de actualizacion')
},
update: async (req, res)=> {
    //res.send ('Actualización de Tareas');
    let id = req.params.id;
    const contact = await Contact.updateOne ({_id: id}, req.body);
    res.redirect ('/');
},
delete: async(req, res)=> {
    let id = req.params.id;
    await Contact.deleteOne ({_id: id})
    res.redirect ('/');
    //res.send ('Borrado Tareas')
},
change: async (req, res) => {
    //res.send("Cambio de estado");
    let id = req.params.id;
    const contact = await Contact.findById(id);
    contact.status = !contact.status;
    await contact.save();
    res.redirect("/");
  },

};


module.exports = contactContollers;