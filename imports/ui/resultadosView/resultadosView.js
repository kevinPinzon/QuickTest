import './resultadosView.html';
import { Calificaciones } from '../../api/calificaciones.js';

Template.resultadosView.onRendered(function(){
    Meteor.subscribe('calificaciones');
});

Template.resultadosView.helpers({
  Resultados: function(){
    return Calificaciones.find({}).fetch();
  }
});
