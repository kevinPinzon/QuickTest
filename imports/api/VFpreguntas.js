export const Vfpreguntas = new Mongo.Collection('vfpreguntas');

let Schema = {};

Schema.vfpregunta = new SimpleSchema({
  afirmacion: {
    type: String
  },
  valor: {
    type: Boolean
  }
});

Vfpreguntas.attachSchema(Schema.vfpregunta);

if(Meteor.isServer){
  Meteor.methods({
        'vfpregunta.insert'(vfpregunta){
            console.log("dentro de Vfpregunta.insert...");
            Vfpreguntas.insert(vfpregunta, function(err){
              if(err){
                console.log("dentro err de la clase vfpregunta");
                throw new Meteor.Error('Error inserting vfpregunta: '+   err);
              }else
                console.log("dentro de vfpregunta: "+ Vfpreguntas.find().count());
            });
         }
  });

  Meteor.publish('vfpreguntas', function(){
    return Vfpreguntas.find();
  });
}
