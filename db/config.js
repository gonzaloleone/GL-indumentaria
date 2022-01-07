

const knex = require('knex') ({
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      port : '3306',
      password : '',
      database : 'glindumentaria'
    },

  });

  knex.schema.hasTable('formulario').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('formulario', function(t) {
        t.increments('id').primary();
        t.string('nombre', 100);
        t.string ('email',100);
        t.string ('telefono',50);
        t.string ('localidad',100);
        t.string ('mensaje',200);

      })
      .then(()=> console.log('Tabla creada'))
      .catch(error => console.log(error));
    }
  });

   module.exports = knex;