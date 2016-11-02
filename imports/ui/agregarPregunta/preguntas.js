import './preguntas.html';

import { Spreguntas } from '../../api/spreguntas.js';

$('#show-dialog').on('show.bs.modal', function (event) {

    var button = $(event.relatedTarget)
    var modal = $(this)

    modal.find('#cancha').val(cancha)
  });

var dialog = document.querySelector('dialog');
var showDialogButton = document.querySelector('#show-dialog');
if (! dialog.showModal) {
  dialogPolyfill.registerDialog(dialog);
}

Template.preguntas.onRendered(function(){
	Meteor.subscribe('spregunta');

  var dialog = document.querySelector('dialog');
  var showDialogButton = document.querySelector('#show-dialog');
  if (! dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }

});

Template.preguntas.events({
  'click #show-dialog': (event){
    dialog.showModal();
});

if (Meteor.isClient) {

  Template.preguntas.helpers({

  });
}
