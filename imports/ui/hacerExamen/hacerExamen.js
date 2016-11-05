import './hacerExamen.html';
import { Spreguntas } from '../../api/spreguntas.js';
import { Vfpreguntas } from '../../api/VFpreguntas.js';

var max,preg1,preg2,preg3,preg4,preg5,preg6,preg7,preg8,preg9,preg10,puntos=0;

Template.hacerExamen.onRendered(function(){
    Meteor.subscribe('spreguntas');
    Meteor.subscribe('vfpreguntas');
});
Template.hacerExamen.events({
  'click #IniciarExamen'(event){
    if ($("#nombreInput").val()!=""){
      document.getElementById("divPreExamen").style.display = "none";
      document.getElementById("divExamen").style.display = "inline";
      swal("Muy Bien", "Examen apunto de inicar", "info");

      //preg1 = Math.floor(Math.random() * (max - 0)) + 0;

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
      }

*/
        /*console.log("pregunta1: "+preg1);
        console.log("pregunta2: "+preg2);
        console.log("pregunta3: "+preg3);
        console.log("pregunta4: "+preg4);
        console.log("pregunta5: "+preg5);*/
        console.log("pregunta6: "+preg6);
        console.log("pregunta7: "+preg7);
        console.log("pregunta8: "+preg8);
        console.log("pregunta9: "+preg9);
        console.log("pregunta10: "+preg10);
    }else {
      swal("Error", "Formulario Incompleto", "error");
    }
  },
  'click #finalizarExamen'(event){
    var selecionada6 = rbSeleccionado("rbV1","rbF1");
    var selecionada7 = rbSeleccionado("rbV2","rbF2");
    var selecionada8 = rbSeleccionado("rbV3","rbF3");
    var selecionada9 = rbSeleccionado("rbV4","rbF4");
    var selecionada10 = rbSeleccionado("rbV5","rbF5");

    console.log("selecionada6: "+selecionada6);
    console.log("selecionada7: "+selecionada7);
    console.log("selecionada8: "+selecionada8);
    console.log("selecionada9: "+selecionada9);
    console.log("selecionada10: "+selecionada10);

    if (selecionada6 != null) {
      revisar(selecionada6,preg6);
    }
    if (selecionada7 != null) {
      revisar(selecionada7,preg7);
    }
    if (selecionada8 != null) {
      revisar(selecionada8,preg8);
    }
    if (selecionada9 != null) {
      revisar(selecionada9,preg9);
    }
    if (selecionada10 != null) {
      revisar(selecionada10,preg10);
    }
    swal("Nota Final", ""+puntos*10+"%", "info");
    puntos=0;
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
    randomPreguntas();
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

rbSeleccionado = function(v,f){
  if (document.getElementById(v).checked) {
    return true;
  }
  if (document.getElementById(f).checked) {
    return false;
  }
  return null;
};

revisar = function(valorSeleccionado,num){
  var seleccionada = Vfpreguntas.find({'numero':num,'valor':valorSeleccionado}).fetch();
  var correcta = Vfpreguntas.find({'numero':num}).fetch();
  console.log("dentro de funcion revisar-----------------------------------------");
  console.log("valorSeleccionado: "+valorSeleccionado);
  console.log("pregunta num: "+ num);
  console.log("seleccionada: ");
  console.log(Vfpreguntas.find({'numero':num,'valor':valorSeleccionado}).fetch());
  console.log("correcta: ");
  console.log(Vfpreguntas.find({'numero':num}).fetch());
  if (JSON.stringify(seleccionada) === JSON.stringify(correcta)){
    console.log("se suman 10");
    puntos++;
  }
  console.log("saliendo de funcion revisar-----------------------------------------");
};

randomPreguntas = function(){
    max = 5;
  preg6 = Math.floor(Math.random() * (max - 0)) + 0;
  do {
    preg7 = Math.floor(Math.random() * (max - 0)) + 0;
    console.log("preg7: "+preg7);
  }while (preg6 == preg7);
  do {
    preg8 = Math.floor(Math.random() * (max - 0)) + 0;
    console.log("preg8: "+preg8);
  }while (preg6 == preg8 ||preg7 == preg8);
  do {
    preg9 = Math.floor(Math.random() * (max - 0)) + 0;
    console.log("preg9: "+preg9);
  } while (preg6 == preg9 ||preg7 == preg9 || preg8 == preg9);
  do {
    preg10 = Math.floor(Math.random() * (max - 0)) + 0;
    console.log("preg10: "+preg10);
  } while (preg6 == preg10 ||preg7 == preg10 || preg8 == preg10 || preg9 == preg10);
}
