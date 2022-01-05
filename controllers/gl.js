const knex = require('../db/config');

const nomina = ( (req,res)=>{
    knex
    .from('glindumentaria')
    .then((json)=>{
        res.send({data:json})
    })
});
// --------buscar-adonde----select-where---------------------------------
const buscar = ( (req,res)=>{
   knex
   .from('glindumentaria')
   .where('id',req.params.id) 
   .then((json)=>{
       res.send({data:json})
   })
   .catch(error => console.log(error));
});

const insertar = ( (req,res)=>{
    let data = {
         nombre : req.body.nombre,
        email: req.body.email,
        telefono:req.body.telefono,
        localidad: req.body.edad,
        mensaje: req.body.mensaje, 

    }
    knex('glindumentaria')
    .insert(data)
    .then(()=>{
       res.send('Dato Insertado')
    })
    .catch(error => console.log(error)); 
   })

   const borrar = ( (req,res)=>{
    knex('glindumentaria')
    .where({id: req.params.id}) 
    .delete()
     .then(()=>{ res.send( 'Dato borrado')})
     .catch(error => console.log(error));
  });

  const actualizar = ( (req,res)=>{
    knex('comicForm')
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

 //----exportar--modulos-----------------------
 module.exports = {
    nomina,
    insertar,
    buscar,
    actualizar,
    borrar,
};