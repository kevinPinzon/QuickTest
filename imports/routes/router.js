import { Router } from 'meteor/iron:router';

import '../ui/LandingPage/LandingPage.js';
import '../ui/layout/layout.js';
import '../ui/navBar/navBar.js';
import '../ui/footer/footer.js';
import '../ui/SignIn/SignIn.js';
import '../ui/SignUp/SignUp.js';
import '../ui/preguntas/preguntas.js';

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/preguntas', function () {
  this.render('preguntas');
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
