import { Router } from 'meteor/iron:router';

import '../ui/LandingPage/LandingPage.js';
import '../ui/layout/layout.js';
import '../ui/navBar/navBar.js';
import '../ui/footer/footer.js';

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('landingPage');
});
