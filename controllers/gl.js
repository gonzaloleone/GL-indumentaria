const knex = require('../db/config');

const nomina = ( (req,res)=>{
    knex
    .from('formulario')
    .then((json)=>{
        res.send({data:json})
    })
});

const buscar = ( (req,res)=>{
   knex
   .from('formulario')
   .where('id',req.params.id) 
   .then((json)=>{
       res.send({data:json})
   })
   .catch(error => console.log(error));
});

const insertar = ( (req,res)=>{
    let data = {
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        localidad: req.body.edad,
        mensaje: req.body.mensaje, 

    }
    knex('formulario')
    .insert(data)
    .then(()=>{
       res.send('Dato Insertado')
    })
    .catch(error => console.log(error)); 
   })

   const actualizar = ( (req,res)=>{
    knex('formulario')
    .where({id: req.params.id}) 
    .update({

        nombre : req.body.nombre,
        email: req.body.email,
        telefono:req.body.telefono,
        localidad: req.body.edad,
        mensaje: req.body.mensaje, 
})
    .then(()=>{ res.send( 'Dato Actualizado')})
    .catch(error => console.log(error));
});

   const borrar = ( (req,res)=>{
    knex('formulario')
    .where({id: req.params.id}) 
    .delete()
     .then(()=>{ res.send( 'Dato borrado')})
     .catch(error => console.log(error));
  });


 module.exports = {
    nomina,
    insertar,
    buscar,
    actualizar,
    borrar,
};