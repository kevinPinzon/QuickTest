import './preguntasView.html';
import { Spreguntas } from '../../api/spreguntas.js';
import { Vfpreguntas } from '../../api/VFpreguntas.js';

Template.preguntasView.onRendered(function(){
    Meteor.subscribe('spreguntas');
    Meteor.subscribe('vfpreguntas');
});

var actual =1;

Template.preguntasView.events({
    'click #dropPregunta'(event){
    },
    'click #mostrarVF'(event){
      document.getElementById("formVF").style.display = "inline";
      document.getElementById("agregarVF").style.display = "inline";
      document.getElementById("formSU").style.display = "none";
      document.getElementById("agregarSU").style.display = "none";

    },
    'click #mostrarSU'(event){
      document.getElementById("formSU").style.display = "inline";
      document.getElementById("agregarSU").style.display = "inline";
      document.getElementById("formVF").style.display = "none";
      document.getElementById("agregarVF").style.display = "none";
    },
    'click #agregarVF'(event){
      var afirmacion = document.getElementById('afirmacionVF').value;
      var respuestaVF=true;
      if (document.getElementById('rbVerdadero').checked) {
        console.log("verdadero");
      }else {
        console.log("falso");
        respuestaVF=false;
      }
      if ($("#afirmacionVF").val()!=""){

        var addVF = {
          afirmacion: afirmacion,
          valor: respuestaVF,
          numero: actual
        };
        Meteor.call('vfpregunta.insert', addVF,function(err){
          if(err){
            console.log(err);
          }
          else{
            document.getElementById("formVF").style.display = "none";
            document.getElementById("agregarVF").style.display = "none";
            swal("Muy Bien", "Pregunta agregada exitosamente", "success");
            $("#afirmacionVF").val("");
          }
        });
      }
      else {
        swal("Error", "Formulario incompleto", "error");
      }
    },
    'click #agregarSU'(event){
      var pregunta = document.getElementById('preguntaSU').value;
      var respuesta0 = document.getElementById('respuesta0').value;
      var respuesta1 = document.getElementById('respuesta1').value;
      var respuesta2 = document.getElementById('respuesta2').value;
      var respuesta3 = document.getElementById('respuesta3').value;

      //console.log("pregunta: "+);
      if ($("#preguntaSU").val()!="" && $("#respuesta0").val()!="" && $("#respuesta1").val()!="" && $("#respuesta2").val()!="" && $("#respuesta3").val()!="") {
        console.log("pregunta: "+pregunta);
        console.log("respuesta0: "+respuesta0);
        console.log("respuesta1: "+respuesta1);
        console.log("respuesta2: "+respuesta2);
        console.log("respuesta3: "+respuesta3);

        var addSU = {
          pregunta: pregunta,
          respuesta0: respuesta0,
          respuesta1: respuesta1,
          respuesta2: respuesta2,
          respuesta3: respuesta3,
          numero: actual,
          correcta:rbCorrectoSU()
        };
        Meteor.call('spregunta.insert', addSU,function(err){
          if(err){
            console.log(err);
          }
          else{
            document.getElementById("formSU").style.display = "none";
            document.getElementById("agregarSU").style.display = "none";
            swal("Muy Bien", "Pregunta agregada exitosamente", "success");
            $("#preguntaSU").val("");
            $("#correcta").val("");
            $("#respuesta1").val("");
            $("#respuesta2").val("");
            $("#respuesta3").val("");
          }
        });
      }
      else {
        swal("Error", "Formulario incompleto", "error");
      }
    }
  });

  Template.preguntasView.helpers({
    PreguntasSU1: function(){
      return Spreguntas.find({'correcta':1}).fetch();
    },
    PreguntasSU2: function(){
      return Spreguntas.find({'correcta':2}).fetch();
    },
    PreguntasSU3: function(){
      return Spreguntas.find({'correcta':3}).fetch();
    },
    PreguntasSU4: function(){
      return Spreguntas.find({'correcta':4}).fetch();
    },
    PreguntasV: function(){
      return Vfpreguntas.find({'valor':true}).fetch();
    },
    PreguntasF: function(){
      return Vfpreguntas.find({'valor':false}).fetch();
    }
});

rbCorrectoSU = function(){
  if (document.getElementById('rbcoreccta1').checked) {
    return 1;
  }else if (document.getElementById('rbcoreccta2').checked) {
    return 2;
  }else if (document.getElementById('rbcoreccta3').checked) {
    return 3;
  }else if (document.getElementById('rbcoreccta4').checked) {
    return 4;
  }
}
