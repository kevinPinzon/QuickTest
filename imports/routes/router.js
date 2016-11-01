import { Router } from 'meteor/iron:router';

import '../ui/LandingPage/LandingPage.js';

Router.configure({
  // layoutTemplate: 'layout',
  // waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', function () {
  this.render('landingPage');	
});
