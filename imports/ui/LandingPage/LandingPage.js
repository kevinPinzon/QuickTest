import './LandingPage.html';

Template.landingPage.events({
    'click #IniciarExam'(event){
    	Router.go('/examen');
    }
});
