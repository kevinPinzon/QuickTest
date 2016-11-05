import './hacerExamen.html';
import { Spreguntas } from '../../api/spreguntas.js';
import { Vfpreguntas } from '../../api/VFpreguntas.js';

var max,preg1,preg2,preg3,preg4,preg5,preg6,preg7,preg8,preg9,preg10;

Template.hacerExamen.onRendered(function(){
    Meteor.subscribe('spreguntas');
    Meteor.subscribe('vfpreguntas');
});
Template.hacerExamen.events({
  'click #IniciarExamen'(event){
    max = Spreguntas.find({'exist':"s"}).count() + Vfpreguntas.find({'valor':true}).count()+ Vfpreguntas.find({'valor':false}).count();
    if ($("#nombreInput").val()!=""){
      swal("Muy Bien", "Examen apunto de inicar", "info");
      document.getElementById("divPreExamen").style.display = "none";
      document.getElementById("divExamen").style.display = "inline";

preg1 = Math.floor(Math.random() * (max - 0)) + 0;
preg6 = Math.floor(Math.random() * (max - 0)) + 0;
/*
while (preg1 == preg2) {
  preg2 = Math.floor(Math.random() * (max - 0)) + 0;
}
while (preg1 == preg3 ||preg2 == preg3) {
  preg3 = Math.floor(Math.random() * (max - 0)) + 0;
}
while (preg1 == preg4 ||preg2 == preg4 || preg3 == preg4) {
  preg4 = Math.floor(Math.random() * (max - 0)) + 0;
}
while (preg1 == preg5 ||preg2 == preg5 || preg3 == preg5 || preg4 == preg5) {
  preg5 = Math.floor(Math.random() * (max - 0)) + 0;
}*/
 do {
   preg7 = Math.floor(Math.random() * (max - 0)) + 0;
 }while (preg6 == preg7);
do {
  preg8 = Math.floor(Math.random() * (max - 0)) + 0;
}while (preg6 == preg8 ||preg7 == preg8);
/*while (preg6 == preg9 ||preg7 == preg9 || preg8 == preg9) {
  preg9 = Math.floor(Math.random() * (max - 0)) + 0;
}
while (preg6 == preg10 ||preg7 == preg10 || preg8 == preg10 || preg9 == preg10) {
  preg10 = Math.floor(Math.random() * (max - 0)) + 0;
}*/
      console.log("pregunta1: "+preg1);
      console.log("pregunta2: "+preg2);
      console.log("pregunta3: "+preg3);
      console.log("pregunta4: "+preg4);
      console.log("pregunta5: "+preg5);
      console.log("pregunta6: "+preg6);
      console.log("pregunta7: "+preg7);
      console.log("pregunta8: "+preg8);
      console.log("pregunta9: "+preg9);
      console.log("pregunta10: "+preg10);

    }else {
      swal("Error", "Formulario Incompleto", "error");
    }
  }
});
Template.hacerExamen.helpers({
  PreguntasSU1: function(){
    return Spreguntas.find({'numero':preg1}).fetch();
  },
  PreguntasSU2: function(){
    return Spreguntas.find({'numero':preg2}).fetch();
  },
  PreguntasSU3: function(){
    return Spreguntas.find({'numero':preg3}).fetch();
  },
  PreguntasSU4: function(){
    return Spreguntas.find({'numero':preg4}).fetch();
  },
  PreguntasSU5: function(){
    return Spreguntas.find({'numero':preg5}).fetch();
  },
  PreguntasVF1: function(){
    return Vfpreguntas.find({'numero':preg6}).fetch();
  },
  PreguntasVF2: function(){
    return Vfpreguntas.find({'numero':preg7}).fetch();
  },
  PreguntasVF3: function(){
    return Vfpreguntas.find({'numero':preg8}).fetch();
  },
  PreguntasVF4: function(){
    return Vfpreguntas.find({'numero':preg9}).fetch();
  },
  PreguntasVF5: function(){
    return Vfpreguntas.find({'numero':preg10}).fetch();
  }
});
