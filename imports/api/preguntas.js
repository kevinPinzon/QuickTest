export const Preguntas = new Mongo.Collection('preguntas');

let Schema = {};

Schema.pregunta = new SimpleSchema({
  pregunta: {
    type: String
  },
  tipo: {
    type: Boolean
  },
  respuestas: {
    type: String
  },
  respuestasCorrecta: {
    type: String
  }
});

Preguntas.attachSchema(Schema.pregunta);

if(Meteor.isServer){
  Meteor.methods({
    // 'cancha.create'(cancha){
    //   return Canchas.insert(cancha, function(err){
    //     if(err){
    //       console.log(err);
    //       throw new Meteor.Error(err);
    //     }
    //   });
    // },
    // 'cancha.remove'(cancha){
    //   Canchas.remove(cancha, function(err){
    //     if(err)
    //       throw new Meteor.Error(err);
    //   });
    // }
  });

  Meteor.publish('preguntas', function(){
    return Canchas.find();
  });
}
