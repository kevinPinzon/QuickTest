import './hacerExamen.html';
import { Spreguntas } from '../../api/spreguntas.js';
import { Vfpreguntas } from '../../api/VFpreguntas.js';
import { Calificaciones } from '../../api/calificaciones.js';

var max,preg1,preg2,preg3,preg4,preg5,preg6,preg7,preg8,preg9,preg10,puntos=0,nombre,tiempoLimite = 300;//1*60000;
var countdown = new ReactiveCountdown(tiempoLimite);

Template.hacerExamen.onRendered(function(){
    Meteor.subscribe('spreguntas');
    Meteor.subscribe('vfpreguntas');
    Meteor.subscribe('calificaciones');
});
Template.hacerExamen.events({
  'click #IniciarExamen'(event){
    if ($("#nombreInput").val()!=""){
      countdown.start(function() {
        swal("Tiempo Agotado","Limite de tiempo de 5 minutos a termiando", "info");
        var btnTerminar = document.getElementById("finalizarExamen");
        btnTerminar.click();
      });
    //  setTimeout(function(){
//        var btnTerminar = document.getElementById("finalizarExamen");
  //      swal("Tiempo Agotado","Limite de tiempo de 5 minutos a termiando", "info");
    //    btnTerminar.click();
      //}, tiempoLimite);

      swal("Muy Bien", "Examen apunto de inicar", "info");
      document.getElementById("divPreExamen").style.display = "none";
      document.getElementById("divExamen").style.display = "inline";
        nombre= document.getElementById('nombreInput').value;
        //("pregunta1: "+preg1);
        //("pregunta2: "+preg2);
        //("pregunta3: "+preg3);
        //("pregunta4: "+preg4);
        //("pregunta5: "+preg5);
        //("pregunta6: "+preg6);
        //("pregunta7: "+preg7);
        //("pregunta8: "+preg8);
        //("pregunta9: "+preg9);
        //("pregunta10: "+preg10);
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

    //("selecionada1: "+selecionada1);
    //("selecionada2: "+selecionada2);
    //("selecionada3: "+selecionada3);
    //("selecionada4: "+selecionada4);
    //("selecionada5: "+selecionada5);
    //("selecionada6: "+selecionada6);
    //("selecionada7: "+selecionada7);
    //("selecionada8: "+selecionada8);
    //("selecionada9: "+selecionada9);
    //("selecionada10: "+selecionada10);

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
      nombre: nombre,
      nota: puntos*10,
    };
    Meteor.call('calificacion.insert', newCalificacion,function(err){
      if(err){
        //(err);
      }
      else{
        swal("Hola "+nombre, "Tu nota Final es de "+newCalificacion.nota+"%", "info");
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
  },
  getCountdown: function() {
        return countdown.get();
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
    //("se suman 10");
    puntos++;
  }
}

revisar = function(valorSeleccionado,num){
  var seleccionada = Vfpreguntas.find({'numero':num,'valor':valorSeleccionado}).fetch();
  var correcta = Vfpreguntas.find({'numero':num}).fetch();
  //("dentro de funcion revisar-----------------------------------------");
  //("valorSeleccionado: "+valorSeleccionado);
  //("pregunta num: "+ num);
  //("seleccionada: ");
  //(Vfpreguntas.find({'numero':num,'valor':valorSeleccionado}).fetch());
  //("correcta: ");
  //(Vfpreguntas.find({'numero':num}).fetch());
  if (JSON.stringify(seleccionada) === JSON.stringify(correcta)){
    //("se suman 10");
    puntos++;
  }
  //("saliendo de funcion revisar-----------------------------------------");
};

randomPreguntas = function(){
  max = 10;
  preg1 = Math.floor(Math.random() * (max - 0)) + 0;
  //("preg1: "+preg1);
  do {
    preg2 = Math.floor(Math.random() * (max - 0)) + 0;
    //("preg2: "+preg2);
  }while (preg1 == preg2);
  do {
    preg3 = Math.floor(Math.random() * (max - 0)) + 0;
    //("preg3: "+preg3);
  }while (preg1 == preg3 ||preg2 == preg3);
  do {
    preg4 = Math.floor(Math.random() * (max - 0)) + 0;
    //("preg4: "+preg4);
  } while (preg1 == preg4 ||preg2 == preg4 || preg3 == preg4);
  do {
    preg5 = Math.floor(Math.random() * (max - 0)) + 0;
    //("preg5: "+preg5);
  } while (preg1 == preg5 ||preg2 == preg5 || preg3 == preg5 || preg4 == preg5);
  preg6 = Math.floor(Math.random() * (max - 0)) + 0;
  //("preg6: "+preg6);
  do {
    preg7 = Math.floor(Math.random() * (max - 0)) + 0;
    //("preg7: "+preg7);
  }while (preg6 == preg7);
  do {
    preg8 = Math.floor(Math.random() * (max - 0)) + 0;
    //("preg8: "+preg8);
  }while (preg6 == preg8 ||preg7 == preg8);
  do {
    preg9 = Math.floor(Math.random() * (max - 0)) + 0;
    //("preg9: "+preg9);
  } while (preg6 == preg9 ||preg7 == preg9 || preg8 == preg9);
  do {
    preg10 = Math.floor(Math.random() * (max - 0)) + 0;
    //("preg10: "+preg10);
  } while (preg6 == preg10 ||preg7 == preg10 || preg8 == preg10 || preg9 == preg10);
}
