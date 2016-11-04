import './preguntasView.html';
import { Spreguntas } from '../../api/spreguntas.js';

Template.preguntasView.onRendered(function(){
    Meteor.subscribe('spreguntas');
});

Template.preguntasView.events({
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
    'click #agregarSU'(event){
      var pregunta = document.getElementById('preguntaSU').value;
      var correcta = document.getElementById('correcta').value;
      var respuesta1 = document.getElementById('respuesta1').value;
      var respuesta2 = document.getElementById('respuesta2').value;
      var respuesta3 = document.getElementById('respuesta3').value;
      //console.log("pregunta: "+);
      if ($("#preguntaSU").val()!="" && $("#correcta").val()!="" && $("#respuesta1").val()!="" && $("#respuesta2").val()!="" && $("#respuesta3").val()!="") {
        console.log("pregunta: "+pregunta);
        console.log("correcta: "+correcta);
        console.log("respuesta1: "+respuesta1);
        console.log("respuesta2: "+respuesta2);
        console.log("respuesta3: "+respuesta3);

        var addVF = {
          pregunta: pregunta,
          correcta: correcta,
          respuesta1: respuesta1,
          respuesta2: respuesta2,
          respuesta3: respuesta3
        };
        Meteor.call('spregunta.insert', addVF,function(err){
          if(err){
            console.log(err);
          }
          else{
            swal("Muy Bien", "Pregunta agregada exitosamente", "success");
            document.getElementById("formSU").style.display = "none";
            document.getElementById("agregarSU").style.display = "none";
            $("#preguntaSU").val("");
            $("#correcta").val("");
            $("#respuesta1").val("");
            $("#respuesta2").val("");
            $("#respuesta3").val("");
          }
        });
      }
      else {
        swal("Error", "Formulario Imcompleto", "error");
      }
    }
  });
