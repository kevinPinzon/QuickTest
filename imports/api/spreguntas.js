export const Spreguntas = new Mongo.Collection('spreguntas');

let Schema = {};

Schema.spregunta = new SimpleSchema({
  pregunta: {
    type: String
  },
  respuesta0: {
    type: String
  },
  respuesta1: {
    type: String
  },
  respuesta2: {
    type: String
  },
  respuesta3: {
    type: String
  },
  numero:{
    type: Number
  },
  correcta:{
    type: Number
  }
});

Spreguntas.attachSchema(Schema.spregunta);

if(Meteor.isServer){
  Meteor.methods({
        'spregunta.insert'(spregunta){
            console.log("dentro de Spregunta.insert...");
            Spreguntas.insert(spregunta, function(err){
              if(err){
                console.log("dentro err de la clase spregunta");
                throw new Meteor.Error('Error inserting spregunta: '+   err);
              }else
                console.log("dentro de spregunta: "+ Spreguntas.find().count());
            });
         }
  });

  Meteor.publish('spreguntas', function(){
    return Spreguntas.find();
  });
}
