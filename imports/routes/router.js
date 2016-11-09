import { Router } from 'meteor/iron:router';

import '../ui/LandingPage/LandingPage.js';
import '../ui/layout/layout.js';
import '../ui/navBar/navBar.js';
import '../ui/footer/footer.js';
import '../ui/SignIn/SignIn.js';
import '../ui/SignUp/SignUp.js';
import '../ui/preguntasView/preguntasView.js';
import '../ui/hacerExamen/hacerExamen.js';
import '../ui/resultadosView/resultadosView.js';

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/examen', function () {
  this.render('hacerExamen');
});

Router.route('/preguntasView', function () {
  this.render('preguntasView');
});

Router.route('/', function () {
  this.render('landingPage');
});

Router.route('/signin', function () {
  this.render('signIn');
});

Router.route('/signup', function () {
  this.render('signUp');
});

Router.route('/resultados', function () {
  this.render('resultadosView');
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only: 'preguntasView'});
Router.onBeforeAction(requireLogin, {only: 'resultados'});
