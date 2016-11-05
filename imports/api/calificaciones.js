export const Calificaciones = new Mongo.Collection('calificaciones');

let Schema = {};

Schema.calificacion = new SimpleSchema({
  nombre: {
    type: String
  },
  nota:{
    type: Number
  }
});

Calificaciones.attachSchema(Schema.calificacion);

if(Meteor.isServer){
  Meteor.methods({
        'calificacion.insert'(calificacion){
            console.log("dentro de Calificacion.insert...");
            Calificaciones.insert(calificacion, function(err){
              if(err){
                console.log("dentro err de la clase calificacion");
                throw new Meteor.Error('Error inserting calificacion: '+   err);
              }else
                console.log("dentro de calificacion: "+ Calificaciones.find().count());
            });
         }
  });

  Meteor.publish('calificaciones', function(){
    return Calificaciones.find();
  });
}
