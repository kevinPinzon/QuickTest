export const Spreguntas = new Mongo.Collection('spreguntas');

let Schema = {};

Schema.spregunta = new SimpleSchema({
  pregunta: {
    type: String
  },
  respuestas: {
    type: String
  },
  respuestasCorrecta: {
    type: String
  }
});

Spreguntas.attachSchema(Schema.spregunta);

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

  Meteor.publish('spreguntas', function(){
    return Spreguntas.find();
  });
}
