import './preguntas.html';

import { Spreguntas } from '../../api/spreguntas.js';

Template.preguntas.onRendered(function(){
	Meteor.subscribe('spregunta');
});

Template.preguntas.events({
});

if (Meteor.isClient) {

  Template.preguntas.helpers({

  });
}
