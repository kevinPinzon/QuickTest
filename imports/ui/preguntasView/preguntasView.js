import './preguntasView.html';

Template.preguntasView.events({
    'click #mostrarVF'(event){
      document.getElementById("formVF").style.display = "inline";
      document.getElementById("formSU").style.display = "none";
    },
    'click #mostrarSU'(event){
      document.getElementById("formSU").style.display = "inline";
      document.getElementById("formVF").style.display = "none";
    }
  });
