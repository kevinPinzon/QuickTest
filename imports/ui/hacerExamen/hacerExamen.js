import './hacerExamen.html';
import { Spreguntas } from '../../api/spreguntas.js';
import { Vfpreguntas } from '../../api/VFpreguntas.js';
import { Calificaciones } from '../../api/calificaciones.js';

var max,preg1,preg2,preg3,preg4,preg5,preg6,preg7,preg8,preg9,preg10,puntos;

Template.hacerExamen.onRendered(function(){
    Meteor.subscribe('spreguntas');
    Meteor.subscribe('vfpreguntas');
    Meteor.subscribe('calificaciones');
});
Template.hacerExamen.events({
  'click #IniciarExamen'(event){
    if ($("#nombreInput").val()!=""){
      document.getElementById("divPreExamen").style.display = "none";
      document.getElementById("divExamen").style.display = "inline";
      swal("Muy Bien", "Examen apunto de inicar", "info");

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
  },
  'click #finalizarExamen'(event){
    var selecionada1 = rbSeleccionadoSU("rbcoreccta1","rbcoreccta2","rbcoreccta3","rbcoreccta4");
    var selecionada2 = rbSeleccionadoSU("rbcoreccta12","rbcoreccta22","rbcoreccta32","rbcoreccta42");
    var selecionada3 = rbSeleccionadoSU("rbcoreccta13","rbcoreccta23","rbcoreccta33","rbcoreccta43");
    var selecionada4 = rbSeleccionadoSU("rbcoreccta14","rbcoreccta24","rbcoreccta34","rbcoreccta44");
    var selecionada5 = rbSeleccionadoSU("rbcoreccta15","rbcoreccta25","rbcoreccta35","rbcoreccta45");
    var selecionada6 = rbSeleccionado("rbV1","rbF1");
    var selecionada7 = rbSeleccionado("rbV2","rbF2");
    var selecionada8 = rbSeleccionado("rbV3","rbF3");
    var selecionada9 = rbSeleccionado("rbV4","rbF4");
    var selecionada10 = rbSeleccionado("rbV5","rbF5");

    console.log("selecionada1: "+selecionada1);
    console.log("selecionada2: "+selecionada2);
    console.log("selecionada3: "+selecionada3);
    console.log("selecionada4: "+selecionada4);
    console.log("selecionada5: "+selecionada5);
    console.log("selecionada6: "+selecionada6);
    console.log("selecionada7: "+selecionada7);
    console.log("selecionada8: "+selecionada8);
    console.log("selecionada9: "+selecionada9);
    console.log("selecionada10: "+selecionada10);

    if (selecionada1 > 0) {
      revisarSU(selecionada1,preg1);
    }
    if (selecionada2 > 0) {
      revisarSU(selecionada2,preg2);
    }
    if (selecionada3 > 0) {
      revisarSU(selecionada3,preg3);
    }
    if (selecionada4 > 0) {
      revisarSU(selecionada4,preg4);
    }
    if (selecionada5 > 0) {
      revisarSU(selecionada5,preg5);
    }
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
    var newCalificacion = {
      nombre: $("#nombreInput").val(),
      nota: puntos*10,
    };
    Meteor.call('calificacion.insert', newCalificacion,function(err){
      if(err){
        console.log(err);
      }
      else{
        swal("Hola "+$("#nombreInput").val(), ""+puntos*10+"%"+" es tu nota Final", "info");
        document.getElementById("divPreExamen").style.display = "inline";
        document.getElementById("divExamen").style.display = "none";
      }
    });
    puntos=0;
    Router.go('/');
  }
});

Template.hacerExamen.helpers({
  PreguntasSU1: function(){
    randomPreguntas();
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

rbSeleccionadoSU = function(rb1,rb2,rb3,rb4){
  if (document.getElementById(rb1).checked) {
    return 1;
  }
  if (document.getElementById(rb2).checked) {
    return 2;
  }
  if (document.getElementById(rb3).checked) {
    return 3;
  }
  if (document.getElementById(rb4).checked) {
    return 4;
  }
  return 0;
};

rbSeleccionado = function(v,f){
  if (document.getElementById(v).checked) {
    return true;
  }
  if (document.getElementById(f).checked) {
    return false;
  }
  return null;
};

revisarSU = function(valorSeleccionado,num){
  var seleccionada = Spreguntas.find({'numero':num,'correcta':valorSeleccionado}).fetch();
  var correcta = Spreguntas.find({'numero':num}).fetch();
  if (JSON.stringify(seleccionada) === JSON.stringify(correcta)){
    console.log("se suman 10");
    puntos++;
  }
}

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
  max = 6;
  preg1 = Math.floor(Math.random() * (max - 0)) + 0;
  console.log("preg1: "+preg1);
  do {
    preg2 = Math.floor(Math.random() * (max - 0)) + 0;
    console.log("preg2: "+preg2);
  }while (preg1 == preg2);
  do {
    preg3 = Math.floor(Math.random() * (max - 0)) + 0;
    console.log("preg3: "+preg3);
  }while (preg1 == preg3 ||preg2 == preg3);
  do {
    preg4 = Math.floor(Math.random() * (max - 0)) + 0;
    console.log("preg4: "+preg4);
  } while (preg1 == preg4 ||preg2 == preg4 || preg3 == preg4);
  do {
    preg5 = Math.floor(Math.random() * (max - 0)) + 0;
    console.log("preg5: "+preg5);
  } while (preg1 == preg5 ||preg2 == preg5 || preg3 == preg5 || preg4 == preg5);
  preg6 = Math.floor(Math.random() * (max - 0)) + 0;
  console.log("preg6: "+preg6);
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
